import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
} from '@nestjs/common';
import { CreateAutosDTO } from './dto/autos.dto';

@Controller('autos')
export class AutosController {
  @Post('/create')
  createPost(@Res() res, @Body() createAutosDTO: CreateAutosDTO) {
    //console.log(createAutosDTO);
    return res.status(HttpStatus.OK).json({
      message: 'recieved',
    });
  }
}
