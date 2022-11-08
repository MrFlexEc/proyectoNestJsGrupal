import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Constante y datos
  const options = new DocumentBuilder()
  .setTitle('Separación de Áreas Deportivas')
  .setDescription('Este sitio almacena información para la reservación de cancha por deportistas')
  .setVersion('1.0')
  .addTag('reservacion')
  .build();

  const document = SwaggerModule.createDocument(app, options);
  //Ruta para acceder a Swagger
  SwaggerModule.setup('reservacion/docs', app, document);

  app.enableCors();
  await app.listen(process.env.PORT || 443);

}
bootstrap();
