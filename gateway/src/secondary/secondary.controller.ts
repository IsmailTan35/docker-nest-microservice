import { Get } from '@nestjs/common';

export class SecondaryController {
  @Get('secondary')
  getSecondary(): string {
    return 'Secondary';
  }
}
