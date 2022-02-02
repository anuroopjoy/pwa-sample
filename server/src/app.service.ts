import { Injectable } from '@nestjs/common';
import { USER_SUBSCRIPTIONS } from './app.const';

const webpush = require('web-push');

const userMap = {
  admin: 'admin',
};
@Injectable()
export class AppService {
  getCities(): { name: string; image: string; alt: string }[] {
    return [
      {
        name: 'trulli',
        image: 'pic_trulli.jpg',
        alt: 'Italian Trulli',
      },
      {
        name: 'chania',
        image: 'img_chania.jpg',
        alt: 'Chania',
      },
    ];
  }

  login({ username, password }): boolean {
    if (userMap[username] === password) return true;
    return false;
  }

  subscription({ sub }): any {
    USER_SUBSCRIPTIONS.length = 0;
    USER_SUBSCRIPTIONS.push(sub);
    console.log(USER_SUBSCRIPTIONS);
    return { message: 'Subscription added successfully' };
  }

  async notifications({ data }) {
    await Promise.all(
      USER_SUBSCRIPTIONS.map((sub) => webpush.sendNotification(sub, data)),
    );
    return { message: 'Notifications sent successfully' };
  }
}
