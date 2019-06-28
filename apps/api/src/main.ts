/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});

  const globalPrefix = process.env.API_PATH || 'api';
  app.setGlobalPrefix(globalPrefix);

  const swaggerConfig = new DocumentBuilder()
  .setBasePath(globalPrefix)
  .setTitle('Fullstack API')
  .setVersion('1.0')
  .build();

    SwaggerModule.setup(
      process.env.DOCS_PATH || 'docs',
      app,
      SwaggerModule.createDocument(app, swaggerConfig)
    );


  const port = process.env.API_PORT || 3333;
  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
