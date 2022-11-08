"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Separación de Áreas Deportivas')
        .setDescription('Este sitio almacena información para la reservación de cancha por deportistas')
        .setVersion('1.0')
        .addTag('reservacion')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('reservacion/docs', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map