import { Body, Controller, HttpCode, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { DataDto } from './dto/data.dto';

@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}

  @Post('schedule')
  @HttpCode(200)
  async runLater(@Body() data: DataDto) {
    await this.service.runLater(data);
    return { success: true };
  }
}
