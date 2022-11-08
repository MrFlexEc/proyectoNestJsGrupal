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
exports.DeportistaController = void 0;
const common_1 = require("@nestjs/common");
const deportista_dto_1 = require("./dto/deportista.dto");
const deportista_service_1 = require("./deportista.service");
let DeportistaController = class DeportistaController {
    constructor(deportistaService) {
        this.deportistaService = deportistaService;
    }
    async createPost(res, createDeportistaDTO) {
        const deportista = await this.deportistaService.createDeportista(createDeportistaDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'creado correctamente',
            deportista
        });
    }
    async getDeportista(res) {
        const getdeportista = await this.deportistaService.getDeportista();
        return res.status(common_1.HttpStatus.OK).json({
            getdeportista
        });
    }
    async deleteDeportista(res, deportistaID) {
        const deletedeportista = await this.deportistaService.deleteDeportista(deportistaID);
        if (!deletedeportista)
            throw new common_1.NotFoundException('Deportista no encontrado');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Deportista eliminado',
            deletedeportista
        });
    }
    async updateDeportista(resizeBy, createDeportistaDTO, deportistaID) {
        const updatedeportista = await this.deportistaService.updateDeportista(deportistaID, createDeportistaDTO);
        if (!updatedeportista)
            throw new common_1.NotFoundException('Deportista no encontrado');
        return resizeBy.status(common_1.HttpStatus.OK).json({
            message: 'Datos del Deportista actualizados',
            updatedeportista
        });
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, deportista_dto_1.CreateDeportistaDTO]),
    __metadata("design:returntype", Promise)
], DeportistaController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)('/get'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeportistaController.prototype, "getDeportista", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('deportistaID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DeportistaController.prototype, "deleteDeportista", null);
__decorate([
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('deportistaID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, deportista_dto_1.CreateDeportistaDTO, Object]),
    __metadata("design:returntype", Promise)
], DeportistaController.prototype, "updateDeportista", null);
DeportistaController = __decorate([
    (0, common_1.Controller)('deportista'),
    __metadata("design:paramtypes", [deportista_service_1.DeportistaService])
], DeportistaController);
exports.DeportistaController = DeportistaController;
//# sourceMappingURL=deportista.controller.js.map