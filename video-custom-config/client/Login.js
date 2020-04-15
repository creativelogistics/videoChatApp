import React from "react";

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userName: '',
            password: '',
        }
        this.inputHandler = this.inputHandler.bind(this);
    }
inputHandler(event){
   // event.preventDefault();
    console.log(event.target.value)
    
    if (event.target.name === 'userName'){
        this.setState({
            'userName': event.target.value
        })
    }else{
        this.setState({
            'password': event.target.value
        })
    }
}
render (){
    return (
        <div>
            <form onSubmit={ (event) => this.props.setUserDetails(this.state.userName,this.state.password,event)}>
                <label>UserName</label>
                <input name='userName' value ={this.state.userName} onChange= {this.inputHandler}></input>
                <label>Password</label>
                <input  name="password"  value ={this.state.password} onChange= {this.inputHandler}></input>
                <input type = 'submit'></input>
            </form>
        </div>
    )
}
}
          
 

    

export default Login;