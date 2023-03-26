import { Get } from '@nestjs/common';

export class PrimaryController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
