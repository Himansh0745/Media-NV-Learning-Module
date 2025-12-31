// import { WebSocketGateway, SubscribeMessage, MessageBody} from "@nestjs/websockets";

// import { Socket } from "socket.io";


// @WebSocketGateway(8080, {})
// export class ChatGateway{
    
// @SubscribeMessage('events')
// handleEvent(client: Socket, message: any){
//   console.log(message);

//   client.emit('reply', 'Hey I am Sunny Kumar From Iter');
//     }
//  }




import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(8080, {
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  @WebSocketServer() server: Server; // Access Socket.IO server instance (for broadcasting)

  handleConnection(client: Socket) { // Runs when a client connects
    console.log('Client connected:', client.id); // Log connection
  }

  handleDisconnect(client: Socket) { // Runs when a client disconnects
    console.log('Client disconnected:', client.id); // Log disconnection
  }

  @SubscribeMessage('message') // Listen for 'message' event from a client
  handleMessage(
    @MessageBody() message: string, // Message data sent by the client
    @ConnectedSocket() client: Socket, // The client socket that sent the message
  ) {
    console.log('Received from client:', message); // Log incoming message

    client.emit('reply', 'Hey I am Sunny Kumar From Iter'); // emit: reply back only to the same client

    this.server.emit('broadcast', message); // broadcast: send the message to ALL connected clients
  }
}

