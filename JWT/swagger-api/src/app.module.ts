import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { OrdersController } from './orders/orders.controller';
import { OrdersModule } from './orders/orders.module';
import { OrderService } from './order/order.service';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';

@Module({
  imports: [AuthModule, OrdersModule, ProductModule],
  controllers: [AppController, OrdersController, ProductController],
  providers: [AppService, OrderService, ProductService],
})
export class AppModule {}
