import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Autos } from './interfaces/autos.interface';
import { CreateAutosDTO } from './dto/autos.dto';

@Injectable()
export class AutosService {
  constructor(@InjectModel('Autos') readonly autosModel: Model<Autos>) {}

  async getAutos(): Promise<Autos[]> {
    const autos = await this.autosModel.find();
    return autos;
  }
  async getAuto(autoID: string): Promise<Autos> {
    const auto = await this.autosModel.findById(autoID);
    return auto;
  }
  async createAutos(createAutoDTO: CreateAutosDTO): Promise<Autos> {
    const auto = new this.autosModel(createAutoDTO);
    return await auto.save();
  }
  async deleteAuto(autoID: string): Promise<Autos> {
    const deletedAuto = await this.autosModel.findByIdAndDelete(autoID);
    return deletedAuto;
  }
  async updateAuto(autoID, createAutosDTO: CreateAutosDTO): Promise<Autos> {
    const updateAuto = await this.autosModel.findByIdAndUpdate(
      autoID,
      createAutosDTO,
      { new: true },
    );
    return updateAuto;
  }
}
