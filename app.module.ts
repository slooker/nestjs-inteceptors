import { Module, Scope } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorizedCustomerInterceptor } from './interceptors/authorized-customer.interceptor';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useExisting: AuthorizedCustomerInterceptor,
    },
    AuthorizedCustomerInterceptor,
  ],
})
export class AppModule {}
