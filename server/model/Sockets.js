class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvens();
  }

  socketEvens() {
    this.io.on('connection', (socket) => {});
  }
}

export default Sockets;
