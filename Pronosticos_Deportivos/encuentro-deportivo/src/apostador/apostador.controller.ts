import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { CreateApostadorDTO } from './dto/apostador.dto';

import { ApostadorService } from './apostador.service';


@Controller('apostador')
export class ApostadorController {

    constructor(private apostadorservice: ApostadorService){}

    @Post('/create')
    async createPost(@Res() res, @Body() createapostadorDTO: CreateApostadorDTO) {
        //console.log(createapostadorDTO);
        const apostador = await this.apostadorservice.createApostador(createapostadorDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Apostador agregado exitosamente.',
            apostador
        });
    }

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

    @Delete('/')
    async deleteApostador(@Res() res, @Query('apostadorID') apostadorID){
        const Eliminarapostador = await this.apostadorservice.deleteApostador(apostadorID);
        if (!Eliminarapostador) throw new NotFoundException('Apostador no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Apostador eliminado correctamente.',
             Eliminarapostador
        });
    } 

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
