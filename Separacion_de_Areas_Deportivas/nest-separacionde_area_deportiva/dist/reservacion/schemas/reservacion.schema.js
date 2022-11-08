"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservacionSchema = void 0;
const mongoose_1 = require("mongoose");
exports.reservacionSchema = new mongoose_1.Schema({
    fecha_separacion: String,
    hora_inicio: String,
    hora_fin: String,
    canchaID: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "cancha" }],
    deportistaID: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "deportista" }],
});
//# sourceMappingURL=reservacion.schema.js.map