class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvens();
  }

  socketEvens() {
    this.io.on('connection', (socket) => {
      //TODO Valid jwt
      // invalid ? disconnect socket
      // TODO use token to check user is active or not
      // TODO Broadcast
      // TODO Socket join room
      // TODO listen user send message event
      // message-personal
      // TODO when user disconnect
      // markup it and broadcast to all user
    });
  }
}

export default Sockets;
