import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PrimaryController } from './primary.controller';
import { PrimaryService } from './primary.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRIMARY_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3001,
        },
      },
    ]),
  ],
  providers: [PrimaryService],
  controllers: [PrimaryController],
})
export class PrimaryModule {}
