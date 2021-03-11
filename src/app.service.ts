import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  public getHello(): string {
    return 'Hello OCA Global Team World!';
  }

  public accumulate(data: number[]) {
    return (data || []).reduce((a, b) => Number(a) + Number(b));
  }

}
