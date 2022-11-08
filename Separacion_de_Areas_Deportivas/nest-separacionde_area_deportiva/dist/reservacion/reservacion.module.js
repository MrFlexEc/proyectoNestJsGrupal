"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservacionModule = void 0;
const common_1 = require("@nestjs/common");
const reservacion_controller_1 = require("./reservacion.controller");
const reservacion_service_1 = require("./reservacion.service");
const mongoose_1 = require("@nestjs/mongoose");
const reservacion_schema_1 = require("./schemas/reservacion.schema");
let ReservacionModule = class ReservacionModule {
};
ReservacionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'reservacion', schema: reservacion_schema_1.reservacionSchema }
            ])
        ],
        controllers: [reservacion_controller_1.ReservacionController],
        providers: [reservacion_service_1.ReservacionService]
    })
], ReservacionModule);
exports.ReservacionModule = ReservacionModule;
//# sourceMappingURL=reservacion.module.js.map