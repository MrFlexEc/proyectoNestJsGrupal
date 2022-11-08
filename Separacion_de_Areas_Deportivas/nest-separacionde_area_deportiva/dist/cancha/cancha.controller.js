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
exports.CanchaController = void 0;
const common_1 = require("@nestjs/common");
const cancha_dto_1 = require("./dto/cancha.dto");
const cancha_service_1 = require("./cancha.service");
let CanchaController = class CanchaController {
    constructor(canchaService) {
        this.canchaService = canchaService;
    }
    async createPost(res, createCanchaDTO) {
        const cancha = await this.canchaService.createCancha(createCanchaDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'creado correctamente',
            cancha
        });
    }
    async getCancha(res) {
        const getcancha = await this.canchaService.getCancha();
        return res.status(common_1.HttpStatus.OK).json({
            getcancha
        });
    }
    async deleteCancha(res, canchaID) {
        const deletecancha = await this.canchaService.deleteCancha(canchaID);
        if (!deletecancha)
            throw new common_1.NotFoundException('Cancha no encontrada');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Cancha eliminada',
            deletecancha
        });
    }
    async updateCancha(resizeBy, createCanchaDTO, canchaID) {
        const updatecancha = await this.canchaService.updateCancha(canchaID, createCanchaDTO);
        if (!updatecancha)
            throw new common_1.NotFoundException('Cancha no encontrada');
        return resizeBy.status(common_1.HttpStatus.OK).json({
            message: 'Datos de Cancha actualizados',
            updatecancha
        });
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cancha_dto_1.CreateCanchaDTO]),
    __metadata("design:returntype", Promise)
], CanchaController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)('/get'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CanchaController.prototype, "getCancha", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('canchaID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CanchaController.prototype, "deleteCancha", null);
__decorate([
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('canchaID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cancha_dto_1.CreateCanchaDTO, Object]),
    __metadata("design:returntype", Promise)
], CanchaController.prototype, "updateCancha", null);
CanchaController = __decorate([
    (0, common_1.Controller)('cancha'),
    __metadata("design:paramtypes", [cancha_service_1.CanchaService])
], CanchaController);
exports.CanchaController = CanchaController;
//# sourceMappingURL=cancha.controller.js.map