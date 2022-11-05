//importaciones de librerias
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger"//importacion de librria para swagger
//metodo principal
async function bootstrap() {
  //creacion de constante para un nest factory

  const app = await NestFactory.create(AppModule);
 //datos que se obtendran dentro de Swagger
  const options= new DocumentBuilder()
  .setTitle("Registro de Calorias")
  .setDescription("Este es un servicio rest sobre Registro de Calorias - By MorenoB")
  .setVersion("1.0")
  .addTag("Calorias")
  .build();
 
  const document= SwaggerModule.createDocument(app, options)
 //ruta que contendra swagger.
 SwaggerModule.setup("api/docs", app, document)
 //puerto
  app.enableCors();
  await app.listen(process.env.PORT || 443);
//enlace para el hostGratuito --HEROKU 
//https://pruebasunos.herokuapp.com/api/docs#/

}
bootstrap();
