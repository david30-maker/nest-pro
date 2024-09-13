import { Injectable } from '@nestjs/common';
import { DevConfigService } from './common/providers/DevConfigServiice';

@Injectable()
export class AppService {
  constructor( private devConfigService: DevConfigService ) {}
  getHello(): string {
    return 'Hello, I am learning nestjs currently!';
  }
}
