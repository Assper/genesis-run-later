import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppRepo {
  private readonly logger = new Logger(AppRepo.name);

  readonly updateName = async (id: number, name: string): Promise<void> => {
    this.logger.log(`Updating name for id ${id} to ${name} successfully!`);
  }
}
