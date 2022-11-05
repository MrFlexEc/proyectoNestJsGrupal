import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { CreateEncuentroDeportivoDTO } from './dto/encuentro_deportivo.dto';

import { EncuentroDeportivoService } from './encuentro_deportivo.service';


@Controller('encuentro-deportivo')
export class EncuentroDeportivoController {

    constructor(private encuentrodeportivoservice: EncuentroDeportivoService){}

    @Post('/create')
    async createPost(@Res() res, @Body() createencuentrodeportivoDTO: CreateEncuentroDeportivoDTO) {
        //console.log(createencuentrodeportivoDTO);
        const EncuentroDeportivo = await this.encuentrodeportivoservice.createEncuentroDeportivo(createencuentrodeportivoDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Encuentro deportivo agregado exitosamente.',
            EncuentroDeportivo
        });
    }

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

    @Delete('/')
    async deleteEncuentroDeportivo(@Res() res, @Query('EncuentroDeportivoID') EncuentroDeportivoID){
        const EliminarEncuentroDeportivo = await this.encuentrodeportivoservice.deleteEncuentroDeportivo(EncuentroDeportivoID);
        if (!EliminarEncuentroDeportivo) throw new NotFoundException('Encuentro deportivo no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Encuentro deportivo eliminado correctamente.',
             EliminarEncuentroDeportivo
        });
    } 

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
