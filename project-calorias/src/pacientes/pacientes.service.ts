//importacion librerias a usar, y de interfaces y clases
import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Pacientes} from './interfaces/pacientes.interfaces';//contiene los atributos modelos a usar
import {CreatePacienteDTO} from './dto/pacientes.dto';

//clase que sera usada dentro de controlador de paciente, para el uso de las peticiones.
@Injectable()
export class PacientesService {
    constructor(@InjectModel('Pacientes')private readonly  pacienteModel: Model<Pacientes> ){}
    
    //metodo get para obtener todo los pacientes
    async getPacientes():Promise<Pacientes[]>{
        const Platos = await this.pacienteModel.find()
        return Platos;
    }
    //metodo get para obtener un paciente
    async getPaciente(id_paciente: Number):Promise<Pacientes>{
        const paciente = await this.pacienteModel.findById(id_paciente)
        return paciente;

    }
   //metodo para crear paciente
    async createPaciente(createPacienteDTO: CreatePacienteDTO): Promise<Pacientes>{
        const paciente = new this.pacienteModel(createPacienteDTO);
        await paciente.save();
        return paciente;
    }
    //metodo para eliminar paciente
    async deletePaciente(id_paciente: Number):Promise<Pacientes>{
        const deletePaciente = await  this.pacienteModel.findByIdAndDelete(id_paciente);
        return deletePaciente;
    }
    //metodo para modificar un paciente
    async updatePaciente(id_paciente: Number, createPacienteDTO: CreatePacienteDTO): Promise<Pacientes>{
        const UpdatePaciente = await this.pacienteModel.findByIdAndUpdate(id_paciente,createPacienteDTO,{new: true}); 
        return UpdatePaciente;
    }




}
