"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservacionController = void 0;
const common_1 = require("@nestjs/common");
const reservacion_dto_1 = require("./dto/reservacion.dto");
const reservacion_service_1 = require("./reservacion.service");
let ReservacionController = class ReservacionController {
    constructor(reservacionService) {
        this.reservacionService = reservacionService;
    }
    async createPost(res, createReservacionDTO) {
        const reservacion = await this.reservacionService.createReservacion(createReservacionDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'creado correctamente',
            reservacion
        });
    }
    async getReservacion(res) {
        const getreservacion = await this.reservacionService.getReservacion();
        return res.status(common_1.HttpStatus.OK).json({
            getreservacion
        });
    }
    async deleteReservacion(res, reservacionID) {
        const deletereservacion = await this.reservacionService.deleteReservacion(reservacionID);
        if (!deletereservacion)
            throw new common_1.NotFoundException('Reservacion no encontrada');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Reservacion eliminada',
            deletereservacion
        });
    }
    async updateReservacion(resizeBy, createReservacionDTO, reservacionID) {
        const updatereservacion = await this.reservacionService.updateReservacion(reservacionID, createReservacionDTO);
        if (!updatereservacion)
            throw new common_1.NotFoundException('Reservacion no encontrada');
        return resizeBy.status(common_1.HttpStatus.OK).json({
            message: 'Datos de Reservacion actualizados',
            updatereservacion
        });
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, reservacion_dto_1.CreateReservacionDTO]),
    __metadata("design:returntype", Promise)
], ReservacionController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)('/get'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReservacionController.prototype, "getReservacion", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('reservacionID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ReservacionController.prototype, "deleteReservacion", null);
__decorate([
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('reservacionID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, reservacion_dto_1.CreateReservacionDTO, Object]),
    __metadata("design:returntype", Promise)
], ReservacionController.prototype, "updateReservacion", null);
ReservacionController = __decorate([
    (0, common_1.Controller)('reservacion'),
    __metadata("design:paramtypes", [reservacion_service_1.ReservacionService])
], ReservacionController);
exports.ReservacionController = ReservacionController;
//# sourceMappingURL=reservacion.controller.js.map