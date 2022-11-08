import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateReservacionDTO } from './dto/reservacion.dto';
import { ReservacionService } from './reservacion.service';
import { query } from 'express';

@Controller('reservacion')
export class ReservacionController {

    constructor(private reservacionService: ReservacionService){}

    @Post('/create')
    async createPost(@Res() res, @Body() createReservacionDTO:CreateReservacionDTO){
        const reservacion = await this.reservacionService.createReservacion(createReservacionDTO);
        return res.status(HttpStatus.OK).json({
            message: 'creado correctamente',
            reservacion
        })
    }

    @Get('/get')
    async getReservacion(@Res() res) {
        const getreservacion = await this.reservacionService.getReservacion();
        return res.status(HttpStatus.OK).json({
            getreservacion
        })
    }

    @Delete('/delete')
    async deleteReservacion(@Res() res, @Query('reservacionID') reservacionID) {
        const deletereservacion = await this.reservacionService.deleteReservacion(reservacionID);
        if (!deletereservacion) throw new NotFoundException('Reservacion no encontrada');
        return res.status(HttpStatus.OK).json({
            message: 'Reservacion eliminada',
            deletereservacion
        })
    }

    @Put('/update')
    async updateReservacion(@Res() resizeBy, @Body() createReservacionDTO: CreateReservacionDTO, @Query('reservacionID') reservacionID){
        const updatereservacion = await this.reservacionService.updateReservacion(reservacionID, createReservacionDTO);
        if (!updatereservacion) throw new NotFoundException('Reservacion no encontrada');
        return resizeBy.status(HttpStatus.OK).json({
            message: 'Datos de Reservacion actualizados',
            updatereservacion
        })
    }

}
