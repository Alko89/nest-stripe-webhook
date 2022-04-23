import { StripeWebhookHandler } from '@golevelup/nestjs-stripe';
import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  @StripeWebhookHandler('*')
  handlePaymentIntentCreated(evt: Stripe.Event) {
    console.log(evt);
  }
}
