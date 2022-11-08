"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deportistaSchema = void 0;
const mongoose_1 = require("mongoose");
exports.deportistaSchema = new mongoose_1.Schema({
    nombre: String,
    edad: String,
    identificacion: String,
    equipo_representa: String,
    reservacion: { type: mongoose_1.Schema.Types.ObjectId, ref: "reservacion" }
});
//# sourceMappingURL=deportista.schema.js.map