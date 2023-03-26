import { MessagePattern } from '@nestjs/microservices';
import { MainService } from './main.service';
import { Controller } from '@nestjs/common';
@Controller()
export class MainController {
  constructor(private readonly mainService: MainService) {}

  @MessagePattern({ cmd: 'getHello' })
  deneme(data: any) {
    console.log(data);
    return this.mainService.getHello();
  }
}
