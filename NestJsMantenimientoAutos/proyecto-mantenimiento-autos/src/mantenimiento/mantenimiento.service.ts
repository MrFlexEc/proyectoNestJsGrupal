import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Mantenimiento } from './interfaces/mantenimiento.interface';
import { CreateMantenimientoDTO } from './dto/mantenimiento.dto';
@Injectable()
export class MantenimientoService {
  constructor(
    @InjectModel('Mantenimiento')
    readonly mantenimientoModel: Model<Mantenimiento>,
  ) {}
  async getMantenimiento(mantenimientoID: string): Promise<Mantenimiento> {
    const mantenimiento = await this.mantenimientoModel.findById(
      mantenimientoID,
    );
    return mantenimiento;
  }
  async getMantenimientos(): Promise<Mantenimiento[]> {
    const mantenimientos = await this.mantenimientoModel.find();
    return mantenimientos;
  }
  async createMantenimiento(
    createMantenimientoDTO: CreateMantenimientoDTO,
  ): Promise<Mantenimiento> {
    const mantenimiento = new this.mantenimientoModel(createMantenimientoDTO);
    return await mantenimiento.save();
  }
  async deleteMantenimiento(mantenimientoID: string): Promise<Mantenimiento> {
    const deletedMantenimiento = await this.mantenimientoModel.findById(
      mantenimientoID,
    );
    return deletedMantenimiento;
  }
  async updateMantenimiento(
    mantenimientoID: string,
    createMantenimientoDTO: CreateMantenimientoDTO,
  ): Promise<Mantenimiento> {
    const updatedMantenimiento = await this.mantenimientoModel.findById(
      mantenimientoID,
      createMantenimientoDTO,
      { new: true },
    );
    return updatedMantenimiento;
  }
}
