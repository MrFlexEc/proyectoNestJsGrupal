//importacion de libreria y de clases y servicios que seran usados dentro del controlador
import { Controller, Get, Post, Put, Delete, Res,HttpStatus,Body, Param,NotFoundException} from '@nestjs/common';
import {CreatePacienteDTO } from './dto/pacientes.dto'//contiene los atributos cliente/servidor 
import { PacientesService } from './pacientes.service';//contiene metodos"peticiones".

@Controller('pacientes')
//controlador que manejara las respectivas peticiones servidor-cliente

export class PacientesController {
    //cada una de estas peticiones usa el servicio ya que contiene los respectivos metodos para las peticiones 
    constructor(private pacientesService:PacientesService ){}
    
    //peticion post, para crear un paciente con el uso de body apartir de postman.
    @Post('/crear')
    async createPost(@Res() res,@Body() createPacienteDTO:CreatePacienteDTO){
        const paciente = await this.pacientesService.createPaciente(createPacienteDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Paciente ingresado Correctamente..',
             paciente

        });
    }

    //peticion get, mostrara todo los datos que contendra el array de pacientes, almacenados en el mongodb.
    @Get('/')
    async VerPacientes(@Res()res){
        const pacientes = await this.pacientesService.getPacientes();
        return res.status(HttpStatus.OK).json({
            
            pacientes
        });
    }

    //peticion get, mostrara un dato apartir de su respectiva id. 
    @Get('/:id_p')
    async VerPaciente(@Res()res , @Param('id_p')id_paciente) {
        const paciente = await this.pacientesService.getPaciente(id_paciente)
        //VALIDACION , si no se encuentra el paciente lanza el error.
        if(!paciente)throw new NotFoundException('Paciente no encontrado');
        return res.status(HttpStatus.OK).json(paciente);
   }

   //peticion delete, eliminar un dato apartir del envio de una id.
   @Delete('/eliminar/:id_p')
   async EliminarPaciente(@Res()res, @Param('id_p')id_paciente){
        const pacienteDelet = await this.pacientesService.deletePaciente(id_paciente)
        //validacion si el paciente a eliminar no existe enviara un error.
        if(!pacienteDelet)throw new NotFoundException('Paciente no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Paciente eliminado..',
             pacienteDelet
        });
   }
   //peticion put, modificara un dato apartir de el envio de un id, y el uso de body de postman
   @Put('/modificar/:id_p')
   async modificarPaciente(@Res()res,@Body()createPacienteDTO:CreatePacienteDTO,@Param('id_p')id_paciente){
        const updatePaciente = await this.pacientesService.updatePaciente(id_paciente,createPacienteDTO);
        //validacion si el paciente modificado no existe enviara el error.
        if(!updatePaciente)throw new NotFoundException('Paciente no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Paciente modificado',
             updatePaciente 
        });
   }
}
