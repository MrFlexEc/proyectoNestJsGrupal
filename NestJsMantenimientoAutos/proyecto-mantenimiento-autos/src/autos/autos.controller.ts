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
import { CreateAutosDTO } from './dto/autos.dto';
import { AutosService } from './autos.service';

@Controller('autos')
export class AutosController {
  constructor(private autoService: AutosService) {}
  @Post('/create')
  async createPost(@Res() res, @Body() createAutosDTO: CreateAutosDTO) {
    const auto = await this.autoService.createAutos(createAutosDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Auto ingresado satisfactoriamente',
      auto: auto,
    });
  }

  @Get('/')
  async getAutos(@Res() res) {
    const autos = await this.autoService.getAutos();
    res.status(HttpStatus.OK).json({
      autos,
    });
  }
  @Get('/:autoID')
  async getAuto(@Res() res, @Param('autoID') autoID) {
    const auto = await this.autoService.getAuto(autoID);
    if (!auto) throw new NotFoundException('Auto no encontrado');
    return res.status(HttpStatus.OK).json(auto);
  }
  @Delete('/delete')
  async deleteAuto(@Res() res, @Query('autoID') autoID) {
    const autoDeleted = await this.autoService.deleteAuto(autoID);
    if (!autoDeleted) throw new NotFoundException('Auto no encontrado');
    return res.status(HttpStatus.OK).json({
      message: 'Auto borrado exitosamente',
      autoDeleted,
    });
  }
  @Put('/update')
  async updateAuto(
    @Res() res,
    @Body() createAutoDTO: CreateAutosDTO,
    @Query('autoID') autoID,
  ) {
    const updatedAuto = await this.autoService.updateAuto(
      autoID,
      createAutoDTO,
    );
    if (!updatedAuto) throw new NotFoundException('Auto no encontrado');
    return res.status(HttpStatus.OK).json({
      message: 'Auto actualizado',
      updatedAuto,
    });
  }
}
