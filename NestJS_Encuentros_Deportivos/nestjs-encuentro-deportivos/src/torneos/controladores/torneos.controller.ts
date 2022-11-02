//Importamos los metodos del CRUD get, post, put, delete en el decorador
import { Body, Controller, Delete, Get, Param, Post, Put,ParseIntPipe } from '@nestjs/common';
//importamos servicios los cuales tienen las funciones que responderan al cliente
import { TorneosServicios } from '../servicios/torneos.service';
//importamos las validaciones
import { CrearModificarTorneo } from '../validaciones/torneos.dto';

@Controller('api/rest/torneos')
export class TorneosController {

//Se realiza una inyección de dependencia para que el controlador pueda ejecutar las funciones
constructor(
    private torneosServicios: TorneosServicios
){}

//Se definen las rutas 

//Ruta para devolver todos los torneos 
@Get()
MostrarTodos(){
    return this.torneosServicios.MostrarTodosTorneos ();
}
//Ruta para devolver la información de un torneo
//En este caso se utiliza un id y para recibir un paramametro con el decorador @Param
@Get('/:id')
MostrarUno(@Param('id') id: number){
    //Se utiliza el findOne el cuale se le pasará id que recogio en el controlador
    return this.torneosServicios.MostrarUnTorneo(id)
}

//Ruta para crear un torneo
//En este caso se utiliza el decorador body porque de ahí recibe toda la información
@Post()
Crear(@Body() body:CrearModificarTorneo){
    return this.torneosServicios.CrearUnTorneo(body);
}

//Ruta para actualizar un torneo
//Se recibe un parametro que es el id y el body para actualizar
@Put(':id')
Actualizar(@Param('id')id:number, @Body()body:CrearModificarTorneo){
    return this.torneosServicios.ActualizarUnTorneo(id,body);
}

//Ruta para eliminar un torneo
//El delete retorna si se eliminio o no a través de un booleano
@Delete(':id')
Eliminar(@Param('id') id:number){
    return this.torneosServicios.EliminarUnTorneo(id);
    
}
}
