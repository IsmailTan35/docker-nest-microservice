import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class MainController {
  @GrpcMethod('GrpcService', 'FindOne')
  FindOne(data: { id: number }): { id: number; name: string } {
    return { id: 1, name: 'Hello World!' };
  }
}
