import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrimaryModule } from './primary/primary.module';
import { SecondaryModule } from './secondary/secondary.module';

@Module({
  imports: [PrimaryModule, SecondaryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
