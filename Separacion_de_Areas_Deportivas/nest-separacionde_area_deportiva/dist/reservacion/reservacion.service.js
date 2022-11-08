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
exports.ReservacionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let ReservacionService = class ReservacionService {
    constructor(reservacionModel) {
        this.reservacionModel = reservacionModel;
    }
    async getReservacion() {
        const reservacion = await this.reservacionModel.find();
        return reservacion;
    }
    async createReservacion(createReservacionDTO) {
        const reservacion = new this.reservacionModel(createReservacionDTO);
        return await reservacion.save();
    }
    async deleteReservacion(reservacionID) {
        const deletereservacion = await this.reservacionModel.findByIdAndDelete(reservacionID);
        return deletereservacion;
    }
    async updateReservacion(reservacionID, createReservacionDTO) {
        const updatereservacion = await this.reservacionModel.findByIdAndUpdate(reservacionID, createReservacionDTO, { new: true });
        return updatereservacion;
    }
};
ReservacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('reservacion')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ReservacionService);
exports.ReservacionService = ReservacionService;
//# sourceMappingURL=reservacion.service.js.map