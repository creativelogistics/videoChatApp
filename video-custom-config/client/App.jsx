
import React , {createRef} from "react"
import Login from './Login.js'
import io from "socket.io-client"
import UserList from "./UserList.jsx"
import Video from "./Video.jsx"
import Peer from 'simple-peer'
import Canvas from "./Canvas.jsx"

class  App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      socketID: '',
      users: [],
      
      stream: null,
      partnerStream: null,

      isLoggedIn: true,
      callAccepted: false,
      receivingCall : false,
      callerId: '',
      callerSignal: null
    }
    this.socket = createRef();
    this.userVideo = createRef();
    this.partnerVideo = createRef()

    
    // this.toggleVideo = this.toggleVideo.bind(this)
    this.callPeer = this.callPeer.bind(this);
    // this.inititateStream = this.inititateStream.bind(this);
    this.acceptCall = this.acceptCall.bind(this)
    this.setStream =this.setStream.bind(this)
  }


  componentDidMount(){
    navigator.mediaDevices.getUserMedia({video:  true , audio: true})
    .then(stream=> {
      this.setState({
      stream: stream,
      isVideo:  true
      })
      if (this.userVideo.current){
        this.userVideo.current.srcObject =  stream
        }
    })
    this.socket.current = io('/');
    this.socket.current.connect()
    this.socket.current.on("yourID", (socket) => {
      this.socket.current.on("users", (users) => {
        delete users[socket] 
        this.setState({
          users: users,
          socketID : socket
        })
      }) 
      this.socket.current.on('hey', data => {
        console.log('heeeyyy  datasignal '+ data.signal +' from ' +data.from)  
        this.setState({
          receivingCall: true,
          callerSignal: data.signalData,
          callerId: data.from
        })
      })
    }) 
  }

  setStream(){
    console.log("stream set")
    this.userVideo.current.srcObject = this.state.stream
  }

  acceptCall (){
    console.log("callAccepted")
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: this.state.stream
    })
    peer.on('signal', data => {
      this.socket.current.emit('acceptCall', {signal: data , to : this.state.callerId} )
    })
    peer.on('stream',stream => {
      this.setStream()  
      this.partnerVideo.current.srcObject = stream
      this.setState({
        partnerStream: stream
      })
    })
    peer.signal(this.state.callerSignal)
      this.setState({
        callAccepted:true
      })
  }

  callPeer(peerId, event){
    event.preventDefault()
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: this.state.stream
    })
    peer.on('signal', data => {
      this.socket.current.emit('callUser', 
      {
        "userToCall" : peerId , 
        "signalData" : data ,
        "from" : this.state.socketID
      })
    })
    peer.on('stream', (stream)=>{   
      if (this.partnerVideo.current){
      this.partnerVideo.current.srcObject = stream
      }
    })
    this.socket.current.on('callAccepted', signal =>{
      peer.signal(signal)
      this.setState({
        callAccepted: true,
      })
      this.setStream()
    })
  }

  // inititateStream(...args){
  //   navigator.mediaDevices.getUserMedia({video:  true , audio: true})
  //   .then(stream=> {
  //     this.setState({
  //     stream: stream,
  //     isVideo:  true
  //     })
  //     if (this.userVideo.current){
  //       this.userVideo.current.srcObject =  stream
  //     }
  //   })
  // }

//   toggleVideo(){
//     this.inititateStream(!this.state.isVideo)
// }

  render() {
    const userInterface =  () => {
      if (!this.state.isLoggedIn){
        return <Login setUserDetails= {this.setUserDetails}></Login>
      } else if (this.state.callAccepted){
        return(
          <div>
            <p>partner video</p>
            <Video  stream ={this.partnerVideo}></Video>
            <p>user video</p>
            <Video  stream ={this.userVideo}></Video>
          </div>
        ) 
      }else {
        return (
          <div>
            <div style={{visibility: this.state.receivingCall ? 'visible' : 'hidden' }}>
              <p> userId : {this.state.callerId} is calling you </p>
              <input 
                onClick = { () => this.acceptCall() } 
                type='button' 
                value = "accept call" >
              </input>
            </div>
              <p>{this.state.socketID}</p>
              <p>users</p>
              <UserList 
                callPeer = {this.callPeer} 
                users = {this.state.users}>
              </UserList>
          </div>
        ) 
       }
    }
    return (
      <div>
        {userInterface()}  
      </div>
    )
  }
}

export default App;
