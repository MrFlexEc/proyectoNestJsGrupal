import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateDeportistaDTO } from './dto/deportista.dto';
import { DeportistaService } from './deportista.service';
import { query } from 'express';

@Controller('deportista')
export class DeportistaController {

    constructor(private deportistaService: DeportistaService){}

    @Post('/create')
    async createPost(@Res() res, @Body() createDeportistaDTO:CreateDeportistaDTO){
        const deportista = await this.deportistaService.createDeportista(createDeportistaDTO);
        return res.status(HttpStatus.OK).json({
            message: 'creado correctamente',
            deportista
        })
    }

    @Get('/get')
    async getDeportista(@Res() res) {
        const getdeportista = await this.deportistaService.getDeportista();
        return res.status(HttpStatus.OK).json({
            getdeportista
        })
    }

    @Delete('/delete')
    async deleteDeportista(@Res() res, @Query('deportistaID') deportistaID) {
        const deletedeportista = await this.deportistaService.deleteDeportista(deportistaID);
        if (!deletedeportista) throw new NotFoundException('Deportista no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Deportista eliminado',
            deletedeportista
        })
    }

    @Put('/update')
    async updateDeportista(@Res() resizeBy, @Body() createDeportistaDTO: CreateDeportistaDTO, @Query('deportistaID') deportistaID){
        const updatedeportista = await this.deportistaService.updateDeportista(deportistaID, createDeportistaDTO);
        if (!updatedeportista) throw new NotFoundException('Deportista no encontrado');
        return resizeBy.status(HttpStatus.OK).json({
            message: 'Datos del Deportista actualizados',
            updatedeportista
        })
    }

}
