import { Injectable } from '@nestjs/common';
@Injectable()
export class MainService {
  getHello() {
    return 'Hello World!';
  }
}
