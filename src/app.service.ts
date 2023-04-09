import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    const data = {
      data: [
        { name: 'BNK 투자증권', credit: 'AA' },
        { name: 'DB금융투자', credit: 'AA+' },
        { name: 'IBK투자증권', credit: 'AA-' },
        { name: 'KB증권', credit: 'AA' },
      ],
    };
    return data;
  }
}
