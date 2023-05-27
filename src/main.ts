import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // ayuda a que se comuniquen entre puertos
  await app.listen(3000);
}
bootstrap();
