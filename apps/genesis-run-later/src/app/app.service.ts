import { Injectable } from '@nestjs/common';
import { DataDto } from './dto/data.dto';
import { QueueProducer } from './queue/queue.producer';

@Injectable()
export class AppService {
  constructor(private readonly producer: QueueProducer) {}

  async runLater(data: DataDto): Promise<void> {
    this.producer.runLater(
      (context) => {
        const { data } = context;
        this['repository'].updateName(data.id, data.name);
      },
      { data }
    );
  }
}
