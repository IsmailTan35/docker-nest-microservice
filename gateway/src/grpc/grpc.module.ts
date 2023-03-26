import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { GrpcController } from './grpc.controller';
import { GrpcService } from './grpc.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GRPC_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'grpc',
          protoPath: join(__dirname, './grpc.proto'),
        },
      },
    ]),
  ],
  controllers: [GrpcController],
  providers: [GrpcService],
})
export class GrpcModule {}
