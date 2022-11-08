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
exports.CanchaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let CanchaService = class CanchaService {
    constructor(canchaModel) {
        this.canchaModel = canchaModel;
    }
    async getCancha() {
        const cancha = await this.canchaModel.find();
        return cancha;
    }
    async createCancha(createCanchaDTO) {
        const cancha = new this.canchaModel(createCanchaDTO);
        return await cancha.save();
    }
    async deleteCancha(canchaID) {
        const deletecancha = await this.canchaModel.findByIdAndDelete(canchaID);
        return deletecancha;
    }
    async updateCancha(canchaID, createCanchaDTO) {
        const updatecancha = await this.canchaModel.findByIdAndUpdate(canchaID, createCanchaDTO, { new: true });
        return updatecancha;
    }
};
CanchaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('cancha')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CanchaService);
exports.CanchaService = CanchaService;
//# sourceMappingURL=cancha.service.js.map