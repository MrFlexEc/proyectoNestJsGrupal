//Liberías, clases, servicios para utilización de los respectivos metodos
import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { CreateApostadorDTO } from './dto/apostador.dto';

import { ApostadorService } from './apostador.service';

//Encargado de la comunicación Servidor cliente
@Controller('apostador')
export class ApostadorController {
//Servicio para utilización los respectivos metodos
    constructor(private apostadorservice: ApostadorService){}

    //Metodo Post que permite agregar información mediante un json
    @Post('/create')
    async createPost(@Res() res, @Body() createapostadorDTO: CreateApostadorDTO) {
        //console.log(createapostadorDTO);
        const apostador = await this.apostadorservice.createApostador(createapostadorDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Apostador agregado exitosamente.',
            apostador
        });
    }

    //Método Get que permite visualizar la información guardada
    @Get('/')
    async getApostadores(@Res() res) {
        const apostador = await this.apostadorservice.getApostadores();
        return res.status(HttpStatus.OK).json({
            apostador
        })
    }

    @Get('/:apostadorID')
    async getApostador(@Res () res, @Param('apostadorID') apostadorID) {
        const apostador = await this.apostadorservice.getApostador(apostadorID);
        if (!apostador) throw new NotFoundException('Apostador no encontrado')
        return res.status(HttpStatus.OK).json(apostador);
    }

    //Método Delete para eliminar información
    @Delete('/')
    async deleteApostador(@Res() res, @Query('apostadorID') apostadorID){
        const Eliminarapostador = await this.apostadorservice.deleteApostador(apostadorID);
        if (!Eliminarapostador) throw new NotFoundException('Apostador no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Apostador eliminado correctamente.',
             Eliminarapostador
        });
    } 

    //Método Put para editar la información agregada mediante un ID
    @Put('/')
    async actualizarApostador(@Res() res, @Body() createapostadorDTO: CreateApostadorDTO, @Query ('apostadorID') apostadorID) {
        const actualizarApostador =await this.apostadorservice.updateApostador(apostadorID, createapostadorDTO);
        if (!actualizarApostador) throw new NotFoundException('Apostador no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Información de apostador actualizada exitosamente.',
            actualizarApostador
        });
    }
}
