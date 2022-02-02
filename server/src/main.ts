import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const webpush = require('web-push');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: 'http://localhost:4200' });
  await app.listen(3000);
}
const vapidKeys = {
  publicKey:
    'BLJJGwiEene6WWaZ_mMiD1CovYb3a-SRj9dmOzqsyduWAKl82RU1HXxHJDoOSZl9RYPtmNmPR3JZf1Ppt7ul70Q',
  privateKey: 'RcxAnyCFK8gcfL9dFaVD8E6gzpdRtWx3tyH3F21kXhI',
};
webpush.setVapidDetails(
  'mailto:anuroopjoy@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey,
);
bootstrap();
