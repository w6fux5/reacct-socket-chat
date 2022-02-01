import { compareJWT } from '../helpers/jwt.js';
import {
  userIoConnect,
  userIoDisconnect,
  getAllUsers,
  saveMessage,
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

      await userIoConnect(uid);
      console.log(`[ ${uid} ] connected!`);

      // TODO Socket join room
      socket.join(uid);

      this.io.emit('list-users', await getAllUsers());

      // message-personal
      // TODO listen user send message event
      socket.on('message-personal', async (payload) => {
        const message = await saveMessage(payload);
        this.io.to(payload.messageTo).emit('message-personal', message);
        this.io.to(payload.messageFrom).emit('message-personal', message);
      });

      // TODO when user disconnect
      socket.on('disconnect', async (socket) => {
        console.log(`[ ${uid} ] disconnected!`);
        await userIoDisconnect(uid);
        this.io.emit('list-users', await getAllUsers());
      });
    });
  }
}

export default Sockets;
