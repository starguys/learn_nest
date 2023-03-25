import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    const data = {
      companyList: [
        { name: 'BNK 투자증권', creaditRating: 'AA' },
        { name: 'DB금융투자', creaditRating: 'AA+' },
        { name: 'IBK투자증권', creaditRating: 'AA-' },
        { name: 'KB증권', creaditRating: 'AA' },
      ],
    };
    return data;
  }
}
