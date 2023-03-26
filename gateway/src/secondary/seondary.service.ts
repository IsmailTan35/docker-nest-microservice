import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
export class SecondaryService {
  constructor(
    @Inject('SECONDARY_SERVICE') private readonly client: ClientProxy,
  ) {}

  getHello() {
    return this.client.send(
      {
        cmd: 'getHello',
      },
      'Hello from gateway',
    );
  }
}
