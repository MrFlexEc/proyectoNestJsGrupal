import { Controller ,Get, Post, Put, Delete, Res,HttpStatus,Body, Param,NotFoundException} from '@nestjs/common';
import { CreateRegistroDTO } from './dto/registros.dto'
import { RegistrosService } from './registros.service';

@Controller('registros')
export class RegistrosController {
    constructor(private registrosService:RegistrosService ){}
    @Post('/create')
    async createPost(@Res() res,@Body() createRegistroDTO:CreateRegistroDTO){
        //console.log(createPlatoDTO);
        const registro = await this.registrosService.createRegistro(createRegistroDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Registro ingresado Correctamente..',
            //atra vez de la propiedad platos que envie platos
            registro

        });
    }
    @Get('/')
    async getRegistros(@Res()res){
        const registros = await this.registrosService.getRegistros();
        return res.status(HttpStatus.OK).json({
            
            //atra vez de la propiedad platos que envie platos
            registros
        });
    }

    @Get('/:id_R')
    async getRegistro(@Res()res , @Param('id_R')id_registro) {
        const registro = await this.registrosService.getRegistro(id_registro)
        //falta correccion de no ecnontrar el plato.
        if(!registro)throw new NotFoundException('Registro no encontrado');
        return res.status(HttpStatus.OK).json(registro);
   }
   
   @Delete('/delete/:id_R')
    async deletRegistro(@Res()res, @Param('id_R')id_registro){
        const RegistroDelet = await this.registrosService.deleteRegistro(id_registro)
        if(!RegistroDelet)throw new NotFoundException('Registro no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Registro eliminado..',
            //atra vez de la propiedad platos que envie platos
            RegistroDelet
        });
    }   
    @Put('/update/:id_R')
    async updateRegistro(@Res()res,@Body()createRegistroDTO:CreateRegistroDTO,@Param('id_R')id_registro){
        const updateRegistro = await this.registrosService.updateRegistro(id_registro,createRegistroDTO);
        if(!updateRegistro)throw new NotFoundException('Registro no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Registro modificado',
            //atra vez de la propiedad platos que envie platos
            updateRegistro
        });
    }
}
