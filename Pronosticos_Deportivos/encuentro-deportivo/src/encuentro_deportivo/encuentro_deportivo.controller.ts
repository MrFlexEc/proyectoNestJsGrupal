//Liberías, clases, servicios para utilización de los respectivos metodos
import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateEncuentroDeportivoDTO } from './dto/encuentro_deportivo.dto';
import { EncuentroDeportivoService } from './encuentro_deportivo.service';

//Encargado de la comunicación Servidor cliente
@Controller('encuentro-deportivo')
export class EncuentroDeportivoController {
    //Servicio para utilización los respectivos metodos
    constructor(private encuentrodeportivoservice: EncuentroDeportivoService){}

    //Metodo Post que permite agregar información mediante un json
    @Post('/create')
    async createPost(@Res() res, @Body() createencuentrodeportivoDTO: CreateEncuentroDeportivoDTO) {
        //console.log(createencuentrodeportivoDTO);
        const EncuentroDeportivo = await this.encuentrodeportivoservice.createEncuentroDeportivo(createencuentrodeportivoDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Encuentro deportivo agregado exitosamente.',
            EncuentroDeportivo
        });
    }

    //Método Get que permite visualizar la información guardada
    @Get('/')
    async getEncuentroDeportivos(@Res() res) {
        const EncuentroDeportivos = await this.encuentrodeportivoservice.getEncuentroDeportivos();
        return res.status(HttpStatus.OK).json({
            EncuentroDeportivos
        })
    }

    @Get('/:EncuentroDeportivoID')
    async getEncuentroDeportivo(@Res () res, @Param('EncuentroDeportivoID') EncuentroDeportivoID) {
        const EncuentroDeportivo = await this.encuentrodeportivoservice.getEncuentroDeportivo(EncuentroDeportivoID);
        if (!EncuentroDeportivo) throw new NotFoundException('Encuentro deportivo no encontrado')
        return res.status(HttpStatus.OK).json(EncuentroDeportivo);
    }

    //Método Delete para eliminar información
    @Delete('/')
    async deleteEncuentroDeportivo(@Res() res, @Query('EncuentroDeportivoID') EncuentroDeportivoID){
        const EliminarEncuentroDeportivo = await this.encuentrodeportivoservice.deleteEncuentroDeportivo(EncuentroDeportivoID);
        if (!EliminarEncuentroDeportivo) throw new NotFoundException('Encuentro deportivo no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Encuentro deportivo eliminado correctamente.',
             EliminarEncuentroDeportivo
        });
    } 

    //Método Put para editar la información agregada mediante un ID
    @Put('/')
    async actualizarEncuentroDeportivo(@Res() res, @Body() createencuentrodeportivoDTO: CreateEncuentroDeportivoDTO, @Query ('EncuentroDeportivoID') EncuentroDeportivoID) {
        const actualizarEncuentroDeportivo = await  this.encuentrodeportivoservice.updateEncuentroDeportivo(EncuentroDeportivoID, createencuentrodeportivoDTO);
        if (!actualizarEncuentroDeportivo) throw new NotFoundException('Encuentro deportivo no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Información del encuentro deportivo actualizada exitosamente.',
            actualizarEncuentroDeportivo
        });
    }
}
