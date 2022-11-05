//Liberías, clases, servicios para utilización de los respectivos metodos
import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreatePronosticoDTO } from './dto/pronostico.dto';
import { PronosticoService } from './pronostico.service';

//Encargado de la comunicación Servidor cliente
@Controller('pronostico')
export class PronosticoController {
    //Servicio para utilización los respectivos metodos
    constructor(private pronosticoservice: PronosticoService){}

    //Metodo Post que permite agregar información mediante un json
    @Post('/create')
    async createPost(@Res() res, @Body() createpronosticoDTO: CreatePronosticoDTO) {
        //console.log(createapostadorDTO);
        const pronostico = await this.pronosticoservice.createPronostico(createpronosticoDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Pronostico agregado exitosamente.',
            pronostico
        });
    }

    //Método Get que permite visualizar la información guardada
    @Get('/')
    async getPronosticos(@Res() res) {
        const pronostico = await this.pronosticoservice.getPronosticos();
        return res.status(HttpStatus.OK).json({
            pronostico
        })
    }

    @Get('/:PronosticoID')
    async getPronostico(@Res () res, @Param('PronosticoID') PronosticoID) {
        const pronostico = await this.pronosticoservice.getPronostico(PronosticoID);
        if (!pronostico) throw new NotFoundException('Pronostico no encontrado')
        return res.status(HttpStatus.OK).json(pronostico);
    }

    //Método Delete para eliminar información
    @Delete('/')
    async deletePronostico(@Res() res, @Query('PronosticoID') PronosticoID){
        const EliminarPronostico = await this.pronosticoservice.deletePronostico(PronosticoID);
        if (!EliminarPronostico) throw new NotFoundException('Pronostico no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Pronostico eliminado correctamente.',
             EliminarPronostico
        });
    } 

    //Método Put para editar la información agregada mediante un ID
    @Put('/')
    async actualizarPronostico(@Res() res, @Body() createpronosticoDTO: CreatePronosticoDTO, @Query ('PronosticoID') PronosticoID) {
        const actualizarPronostico =await this.pronosticoservice.updatePronostico(PronosticoID, createpronosticoDTO);
        if (!actualizarPronostico) throw new NotFoundException('Pronostico no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Información de pronostico actualizada exitosamente.',
            actualizarPronostico
        });
    }
}