import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GrpcModule } from './grpc/grpc.module';
import { PrimaryModule } from './primary/primary.module';
import { SecondaryModule } from './secondary/secondary.module';

@Module({
  imports: [PrimaryModule, SecondaryModule, GrpcModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
