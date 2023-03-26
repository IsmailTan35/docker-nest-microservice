import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PrimaryEvent } from './event/primary.event';

export class PrimaryService {
  constructor(
    @Inject('PRIMARY_SERVICE') private readonly client: ClientProxy,
  ) {}

  getHello() {
    return this.client.send({ cmd: 'getHello' }, new PrimaryEvent('test'));
  }
}
