# videoChatApp
simple video chat project using webrtc


1. make a self signed certificate with openssl you can skip all the inputs after being prompted  but add your ip homepage  on the common name section example https:// { your ip address }:3000

    open ssl cert https://ma.ttias.be/how-to-create-a-self-signed-ssl-certificate-with-openssl/

2. npm install 

3. change server ip address in the ./server/index.js

server.listen(3000, {server computer's ip address  }, ()=>console.log("video chat sever initialized));

4. create bundle command : npm run react-dev

5. start server command : npm run server 

6. the certificates are super basic so access server from mozilla and dismiss sercurity warning 

7. access in browser at https:// {server computer's ip address} :3000