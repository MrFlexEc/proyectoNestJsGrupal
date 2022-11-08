import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateCanchaDTO } from './dto/cancha.dto';
import { CanchaService } from './cancha.service';
import { query } from 'express';

@Controller('cancha')
export class CanchaController {

    constructor(private canchaService: CanchaService){}

    @Post('/create')
    async createPost(@Res() res, @Body() createCanchaDTO:CreateCanchaDTO){
        const cancha = await this.canchaService.createCancha(createCanchaDTO);
        return res.status(HttpStatus.OK).json({
            message: 'creado correctamente',
            cancha
        })
    }

    @Get('/get')
    async getCancha(@Res() res) {
        const getcancha = await this.canchaService.getCancha();
        return res.status(HttpStatus.OK).json({
            getcancha
        })
    }

    @Delete('/delete')
    async deleteCancha(@Res() res, @Query('canchaID') canchaID) {
        const deletecancha = await this.canchaService.deleteCancha(canchaID);
        if (!deletecancha) throw new NotFoundException('Cancha no encontrada');
        return res.status(HttpStatus.OK).json({
            message: 'Cancha eliminada',
            deletecancha
        })
    }

    @Put('/update')
    async updateCancha(@Res() resizeBy, @Body() createCanchaDTO: CreateCanchaDTO, @Query('canchaID') canchaID){
        const updatecancha = await this.canchaService.updateCancha(canchaID, createCanchaDTO);
        if (!updatecancha) throw new NotFoundException('Cancha no encontrada');
        return resizeBy.status(HttpStatus.OK).json({
            message: 'Datos de Cancha actualizados',
            updatecancha
        })
    }

}
