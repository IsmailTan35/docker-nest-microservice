import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

interface IGrpcService {
  findOne(data: { id: number }): Promise<{ id: number; name: string }>;
}

@Injectable()
export class GrpcService implements OnModuleInit {
  grpc: IGrpcService;
  constructor(@Inject('GRPC_PACKAGE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.grpc = this.client.getService('GrpcService');
  }

  getHello() {
    return this.grpc.findOne({ id: 1 });
  }
}
