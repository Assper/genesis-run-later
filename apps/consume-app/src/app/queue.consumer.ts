import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppRepo } from './app.repo';

type RunLaterPayload = {
  callback: string;
  context: {
    data: {
      id: number;
      name: string;
    };
  };
};

@Controller()
export class QueueConsumer {
  constructor(readonly repository: AppRepo) {}

  @MessagePattern('run_later')
  handleRunLater(@Payload() payload: RunLaterPayload) {
    const { callback: callbackString, context } = payload;
    const callback = new Function(
      'context',
      `return (${callbackString})(context)`
    );
    callback.call(this, context);
  }
}
