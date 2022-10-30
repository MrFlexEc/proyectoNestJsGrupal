import { Controller, Get, Post, Put, Delete, Res,HttpStatus,Body, Param,NotFoundException} from '@nestjs/common';
import {CreatePlatoDTO } from './dto/platos.dto'
import { PlatosService } from './platos.service';

@Controller('platos')
export class PlatosController {
    constructor(private platosService:PlatosService ){}
    @Post('/create')
    async createPost(@Res() res,@Body() createPlatoDTO:CreatePlatoDTO){
        //console.log(createPlatoDTO);
        const plato = await this.platosService.createPlato(createPlatoDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Plato ingresado Correctamente..',
            //atra vez de la propiedad platos que envie platos
            plato

        });
    }

    @Get('/')
    async getPlatos(@Res()res){
        const platos = await this.platosService.getPlatos();
        return res.status(HttpStatus.OK).json({
            
            //atra vez de la propiedad platos que envie platos
            platos
        });
    }

    @Get('/:id_p')
    async getPlato(@Res()res , @Param('id_p')id_plato) {
        const plato = await this.platosService.getPlato(id_plato)
        //falta correccion de no ecnontrar el plato.
        if(!plato)throw new NotFoundException('Plato no encontrado');
        return res.status(HttpStatus.OK).json(plato);
   }

   /*@Delete('/delete')
   async deletPlato(@Res()res, @Query('id_p')id_plato){
   const platoDelet = await this.platosService.deletePlato(id_plato)
   if(!platoDelet)throw new NotFoundException('Plato no encontrado');
   return res.status(HttpStatus.OK).json({
        message: 'Plato eliminado..',
    //atra vez de la propiedad platos que envie platos
        platoDelet
   })*/
   @Delete('/delete/:id_p')
   async deletPlato(@Res()res, @Param('id_p')id_plato){
        const platoDelet = await this.platosService.deletePlato(id_plato)
        if(!platoDelet)throw new NotFoundException('Plato no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Plato eliminado..',
            //atra vez de la propiedad platos que envie platos
            platoDelet
        });
   }
   
   @Put('/update/:id_p')
   async updatePlato(@Res()res,@Body()createPlatoDTO:CreatePlatoDTO,@Param('id_p')id_plato){
        const updatePlato = await this.platosService.updatePlato(id_plato,createPlatoDTO);
        if(!updatePlato)throw new NotFoundException('Plato no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Plato modificado',
            //atra vez de la propiedad platos que envie platos
            updatePlato 
        });
   }
}
