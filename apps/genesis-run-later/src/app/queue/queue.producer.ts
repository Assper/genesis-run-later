import { Injectable, OnModuleInit } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { queueConfig } from './config';
import { DataDto } from '../dto/data.dto';

export type Context = {
  repository: string;
};

@Injectable()
export class QueueProducer implements OnModuleInit {
  private client: ClientProxy;

  onModuleInit() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [queueConfig.host],
        queue: queueConfig.queue,
        queueOptions: { durable: false },
      },
    });
  }

  runLater(
    callback: (context: { data: DataDto }) => void,
    context: { data: DataDto }
  ) {
    const callbackString = callback.toString();
    this.client.emit('run_later', { callback: callbackString, context });
  }
}
