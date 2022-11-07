import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { CreateMantenimientoDTO } from './dto/mantenimiento.dto';
import { MantenimientoService } from './mantenimiento.service';

@Controller('mantenimiento')
export class MantenimientoController {
  constructor(private mantenimientoService: MantenimientoService) {}
  @Post('/create')
  async createPost(
    @Res() res,
    @Body() createMantenimientoDTO: CreateMantenimientoDTO,
  ) {
    const mantenimiento = await this.mantenimientoService.createMantenimiento(
      createMantenimientoDTO,
    );
    return res.status(HttpStatus.OK).json({
      messsage: 'recieved',
      mantenimiento: mantenimiento,
    });
  }
  @Get('/')
  async getConceptos(@Res() res) {
    const conceptos = await this.mantenimientoService.getMantenimientos();
    res.status(HttpStatus.OK).json({
      conceptos,
    });
  }
  @Get('/:conceptoID')
  async getAuto(@Res() res, @Param('mantenimientoID') mantenimientoID) {
    const mantenimiento = await this.mantenimientoService.getMantenimiento(
      mantenimientoID,
    );
    if (!mantenimiento) throw new NotFoundException('Concepto no encontrado');
    return res.status(HttpStatus.OK).json(mantenimiento);
  }
  //http://localhost:5000/concepto/delete?conceptoID=ID
  @Delete('/delete')
  async deleteAuto(@Res() res, @Query('mantenimientoID') mantenimientoID) {
    const mantenimientoDeleted =
      await this.mantenimientoService.deleteMantenimiento(mantenimientoID);
    if (!mantenimientoDeleted)
      throw new NotFoundException('Concepto no encontrado');
    return res.status(HttpStatus.OK).json({
      message: 'Concepto borrado exitosamente',
      mantenimientoDeleted,
    });
  }
  @Put('/update')
  async updateAuto(
    @Res() res,
    @Body() createMantenimientoDTO: CreateMantenimientoDTO,
    @Query('mantenimientoID') mantenimientoID,
  ) {
    const updatedMantenimiento =
      await this.mantenimientoService.updateMantenimiento(
        mantenimientoID,
        createMantenimientoDTO,
      );
    if (!updatedMantenimiento)
      throw new NotFoundException('Auto no encontrado');
    return res.status(HttpStatus.OK).json({
      message: 'Auto actualizado',
      updatedMantenimiento,
    });
  }
}
