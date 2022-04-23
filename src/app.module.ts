import { StripeModule } from '@golevelup/nestjs-stripe';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { stripeSecretKey, stripeWebhookSecret } from './env';

@Module({
  imports: [
    StripeModule.forRoot(StripeModule, {
      apiKey: stripeSecretKey,
      webhookConfig: {
        stripeWebhookSecret: stripeWebhookSecret,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
