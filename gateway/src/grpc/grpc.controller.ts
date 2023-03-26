import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { GrpcService } from './grpc.service';
@Controller('grpc')
export class GrpcController {
  constructor(private readonly grpcService: GrpcService) {}
  @Get()
  getHello() {
    return this.grpcService.getHello();
  }
}
