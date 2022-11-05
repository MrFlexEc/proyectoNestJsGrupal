//Importación de liberías
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
//Metodo 
async function bootstrap() {
  //Constantes
  const app = await NestFactory.create(AppModule);
  //Constante y datos
  const options = new DocumentBuilder()
  .setTitle('Pronósticos Deportivos')
  .setDescription('Este servicio está destinado al registro y almacenamiento de Pronósticos Deportivos')
  .setVersion('1.0')
  .addTag('Pronóstico')
  .build();

  const document = SwaggerModule.createDocument(app, options);
  //Ruta para acceder a Swagger
  SwaggerModule.setup('pronostico/docs', app, document);
  //Puerto
  await app.listen(3000);
}
bootstrap();
