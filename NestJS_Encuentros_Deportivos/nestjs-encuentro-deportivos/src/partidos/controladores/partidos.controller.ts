//Importamos los metodos del CRUD get, post, put, delete en el decorador
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
//importamos para realizar documentación
import { ApiTags } from '@nestjs/swagger';
//importamos servicios los cuales tienen las funciones que responderan al cliente
import { PartidosServicios } from '../servicios/partidos.service';
//importamos las validaciones
import { CrearModificarPartido } from '../validaciones/partidos.dto';

@Controller('api/rest/partidos')
@ApiTags("Partidos")
export class PartidosController {

//Se realiza una inyección de dependencia para que el controlador pueda ejecutar las funciones
constructor(
    private partidosServicios: PartidosServicios
){}


//Se definen las rutas 

//Ruta para devolver todos los partidos
@Get()
MostrarTodos(){
    return this.partidosServicios.MostrarTodosPartidos();
}
//Ruta para devolver la información de un partido
//En este caso se utiliza un id y para recibir un paramametro con el decorador @Param
@Get('/:id')
MostrarUno(@Param('id') id: number){
    //Se utiliza el findOne el cuale se le pasará id que recogio en el controlador
    return this.partidosServicios.MostrarUnPartido(id)
}

//Ruta para crear un partido
//En este caso se utiliza el decorador body porque de ahí recibe toda la información
@Post()
Crear(@Body()body: CrearModificarPartido){
    return this.partidosServicios.CrearUnPartido(body);
}

//Ruta para actualizar un partido
//Se recibe un parametro que es el id y el body para actualizar
@Put(':id')
Actualizar(@Param('id')id:number, @Body()body:CrearModificarPartido){
    return this.partidosServicios.ActualizarUnPartido(id,body);
}

//Ruta para eliminar un partido
//El delete retorna si se eliminio o no a través de un booleano
@Delete(':id')
Eliminar(@Param('id') id:number){
    return this.partidosServicios.EliminarUnPartido(id);
    
}
}
