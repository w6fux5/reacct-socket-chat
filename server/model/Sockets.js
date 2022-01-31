import { compareJWT } from '../helpers/jwt.js';
import {
  userIoConnect,
  userIoDisconnect,
  getAllUsers,
} from '../controller/socketController.js';

class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvens();
  }

  socketEvens() {
    this.io.on('connection', async (socket) => {
      //TODO Valid jwt
      // invalid ? disconnect socket
      const [isValid, uid] = compareJWT(socket.handshake.query['x-token']);

      if (!isValid) {
        console.log('token is invalid');
        return socket.disconnect();
      }

      console.log(`[ ${uid} ] connected!`);
      await userIoConnect(uid);

      // TODO use token to check user is active or not
      // TODO Broadcast
      this.io.emit('list-users', await getAllUsers());
      // TODO Socket join room
      // TODO listen user send message event
      // message-personal
      // TODO when user disconnect
      // markup it and broadcast to all user
      socket.on('disconnect', async (socket) => {
        console.log(`[ ${uid} ] disconnected!`);
        await userIoDisconnect(uid);
      });
    });
  }
}

export default Sockets;
