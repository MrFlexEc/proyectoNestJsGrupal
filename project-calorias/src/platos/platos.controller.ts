//importacion de libreria y de clases y servicios que seran usados dentro del controlador
import { Controller, Get, Post, Put, Delete, Res,HttpStatus,Body, Param,NotFoundException} from '@nestjs/common';
import {CreatePlatoDTO } from './dto/platos.dto';//contiene los atributos cliente/servidor 
import { PlatosService } from './platos.service';//contiene metodos"peticiones".

//controlador que manejara las respectivas peticiones servidor-cliente
@Controller('platos')
export class PlatosController {  
    //cada una de estas peticiones usa el metodo service ya que contiene los respectivos metodos para las peticiones 
    constructor(private platosService:PlatosService ){}
    
    //peticion post para crear platos, apartir del body de postman 
    @Post('/crear')
    async createPost(@Res() res,@Body() createPlatoDTO:CreatePlatoDTO){
        const plato = await this.platosService.createPlato(createPlatoDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Plato ingresado Correctamente..',
            plato

        });
    }

    //peticion get, para obtener todo los platos dentro del array de este.
    @Get('/')
    async VerPlatos(@Res()res){
        const platos = await this.platosService.getPlatos();
        return res.status(HttpStatus.OK).json({
            
             platos
        });
    }
    //peticion get, para obtener un solo plato dentro del array de platos.
    @Get('/:id_p')
    async VerPlato(@Res()res , @Param('id_p')id_plato) {
        const plato = await this.platosService.getPlato(id_plato)
        //validacion, si el plato no existe manda error.
        if(!plato)throw new NotFoundException('Plato no encontrado');
        return res.status(HttpStatus.OK).json(plato);
   }

   //peticion delete, para eliminar un dato apartir de un id que sera enviado como parametro.
   @Delete('/eliminar/:id_p')
   async EliminarPlato(@Res()res, @Param('id_p')id_plato){
        const platoDelet = await this.platosService.deletePlato(id_plato)
        //validacion si el plato no existe arroja error.
        if(!platoDelet)throw new NotFoundException('Plato no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Plato eliminado..',
             platoDelet
        });
   }
   //peticion put, para modificar un dato aparitr de la id_ es decir un parametro de envio
   @Put('/modificar/:id_p')
   async modificarPlato(@Res()res,@Body()createPlatoDTO:CreatePlatoDTO,@Param('id_p')id_plato){
        const updatePlato = await this.platosService.updatePlato(id_plato,createPlatoDTO);
        //validacion, si el id, del plato no existe arroja un error.
        if(!updatePlato)throw new NotFoundException('Plato no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Plato modificado',
            //atra vez de la propiedad platos que envie platos
            updatePlato 
        });
   }
}
