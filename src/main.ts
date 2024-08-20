import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { LibraryModule } from './library.module';
import { environment } from './environments/environment';

async function bootstrap() {
  const app = await NestFactory.create(LibraryModule);
  app.useGlobalPipes(new ValidationPipe({whitelist:true}))
  app.setGlobalPrefix("/api")
  await app.listen(3000);
  
}
bootstrap();
