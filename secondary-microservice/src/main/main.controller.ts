import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { MainService } from './main.service';

@Controller()
export class MainController {
  constructor(private readonly mainService: MainService) {}

  @MessagePattern({ cmd: 'getHello' })
  getHello(data: string): string {
    return this.mainService.getHelloFromSecondary(data);
  }
}
