"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canchaSchema = void 0;
const mongoose_1 = require("mongoose");
exports.canchaSchema = new mongoose_1.Schema({
    cancha: String,
    descripcion: String,
    reservacion: { type: mongoose_1.Schema.Types.ObjectId, ref: "reservacion" }
});
//# sourceMappingURL=cancha.schema.js.map