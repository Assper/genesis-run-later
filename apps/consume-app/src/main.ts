import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { queueConfig } from './app/config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [queueConfig.host],
      queue: queueConfig.queue,
      queueOptions: {
        durable: false
      },
    },
  });
  await app.listen();
}
bootstrap();
