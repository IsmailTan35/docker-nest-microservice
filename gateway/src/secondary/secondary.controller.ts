import { Controller, Get } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { ClientProxy } from '@nestjs/microservices';
import { SecondaryService } from './seondary.service';

@Controller('secondary')
export class SecondaryController {
  constructor(private readonly secondaryService: SecondaryService) {}

  @Get()
  getSecondary() {
    return this.secondaryService.getHello();
  }
}
