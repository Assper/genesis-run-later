import { Module } from '@nestjs/common';
import { QueueConsumer } from './queue.consumer';
import { AppRepo } from './app.repo';

@Module({
  controllers: [QueueConsumer],
  providers: [AppRepo],
})
export class AppModule {}
