import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SecondaryController } from './secondary.controller';
import { SecondaryService } from './seondary.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SECONDARY_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3002,
        },
      },
    ]),
  ],
  providers: [SecondaryService],
  controllers: [SecondaryController],
})
export class SecondaryModule {}
