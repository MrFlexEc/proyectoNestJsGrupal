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
import { CreateConceptoDTO } from './dto/concepto.dto';
import { ConceptoService } from './concepto.service';

@Controller('concepto')
export class ConceptoController {
  constructor(private conceptoService: ConceptoService) {}
  @Post('/create')
  async createPost(@Res() res, @Body() createConceptoDTO: CreateConceptoDTO) {
    const concepto = await this.conceptoService.createConcepto(
      createConceptoDTO,
    );
    return res.status(HttpStatus.OK).json({
      messsage: 'recieved',
      concepto: concepto,
    });
  }
  @Get('/')
  async getConceptos(@Res() res) {
    const conceptos = await this.conceptoService.getConceptos();
    res.status(HttpStatus.OK).json({
      conceptos,
    });
  }
  @Get('/:conceptoID')
  async getAuto(@Res() res, @Param('conceptoID') conceptoID) {
    const concepto = await this.conceptoService.getConcepto(conceptoID);
    if (!concepto) throw new NotFoundException('Concepto no encontrado');
    return res.status(HttpStatus.OK).json(concepto);
  }
  //http://localhost:5000/concepto/delete?conceptoID=ID
  @Delete('/delete')
  async deleteAuto(@Res() res, @Query('conceptoID') conceptoID) {
    const conceptoDeleted = await this.conceptoService.deleteConcepto(
      conceptoID,
    );
    if (!conceptoDeleted) throw new NotFoundException('Concepto no encontrado');
    return res.status(HttpStatus.OK).json({
      message: 'Concepto borrado exitosamente',
      conceptoDeleted,
    });
  }
  @Put('/update')
  async updateAuto(
    @Res() res,
    @Body() createConceptoDTO: CreateConceptoDTO,
    @Query('conceptoID') conceptoID,
  ) {
    const updatedConcepto = await this.conceptoService.updateConcepto(
      conceptoID,
      createConceptoDTO,
    );
    if (!updatedConcepto) throw new NotFoundException('Auto no encontrado');
    return res.status(HttpStatus.OK).json({
      message: 'Auto actualizado',
      updatedConcepto,
    });
  }
}
