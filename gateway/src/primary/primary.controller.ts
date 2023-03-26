import { Controller, Get } from '@nestjs/common';
import { PrimaryService } from './primary.service';

@Controller('primary')
export class PrimaryController {
  constructor(private readonly primaryService: PrimaryService) {}
  @Get()
  getHello() {
    return this.primaryService.getHello();
  }
}
