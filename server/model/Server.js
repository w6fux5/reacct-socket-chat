import express from 'express';
import http from 'http';
import { Server as socketIo } from 'socket.io';
import cors from 'cors';

import Sockets from './Sockets.js';
import connectDB from '../config/db.js';

// Router
import authRouter from '../routes/authRouter.js';
import messageRouter from '../routes/messageRouter.js';

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Connect to db
    connectDB();

    // http server
    this.server = http.createServer(this.app);

    //socket
    this.io = new socketIo(this.server, {
      /* config */
      cors: {
        origin: '*',
      },
    });
  }

  configSocket() {
    new Sockets(this.io);
  }

  middleware() {
    this.app.use(express.static('public'));

    // parse body
    this.app.use(express.json());

    // cors
    this.app.use(cors());

    // Api endpoint
    this.app.use('/api/login', authRouter);
    this.app.use('/api/message', messageRouter);
  }

  execute() {
    // use middleware
    this.middleware();

    // config socket
    this.configSocket();

    this.server.listen(this.port, () => {
      console.log(`server is running on prot ${this.port}`);
    });
  }
}

export default Server;
