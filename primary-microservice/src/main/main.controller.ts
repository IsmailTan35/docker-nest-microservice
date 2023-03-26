import { Get } from '@nestjs/common';
import { MainService } from './main.service';

export class MainController {
  constructor(private readonly mainService: MainService) {}

  @Get()
  getHello(): string {
    return this.mainService.getHello();
  }
}
