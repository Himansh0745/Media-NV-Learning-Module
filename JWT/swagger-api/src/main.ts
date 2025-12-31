import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api'); // (commented) previous line preserved — adding next line to set API prefix so endpoints are served under /api
  app.setGlobalPrefix('api'); // set global prefix so you can access product endpoints under localhost:3000/api/product (e.g., /api/product/1)




  const config = new DocumentBuilder()
    .setTitle('Learning the Swagger API')
    .setDescription('I Used E-Commerce type of API(CRUD) For learning a swagger')
    .setVersion('1.0')
    .addTag('E-Commerce')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);




  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
