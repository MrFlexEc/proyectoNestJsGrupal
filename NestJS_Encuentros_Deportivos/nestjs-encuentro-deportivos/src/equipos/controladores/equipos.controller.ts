//Importamos los metodos del CRUD get, post, put, delete en el decorador
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
//importamos servicios los cuales tienen las funciones que responderan al cliente
import { EquiposServicios } from '../servicios/equipos.service'; 
//importamos las validaciones
import { CrearModificarEquipo } from '../validaciones/equipos.dto';


@Controller('api/rest/equipos')
export class EquiposController {

    //Se realiza una inyección de dependencia para que el controlador pueda ejecutar las funciones
    constructor(
        private equiposServicios: EquiposServicios
    ){}

    //Se definen las rutas 

    //Ruta para devolver todos los equipos
    @Get()
    MostrarTodos(){
        return this.equiposServicios.MostarTodosEquipos();
    }
    //Ruta para devolver la información de un equipo
    //En este caso se utiliza un id y para recibir un paramametro con el decorador @Param
    @Get('/:id')
    MostarUno(@Param('id') id: number){
        //Se utiliza el findOne el cuale se le pasará id que recogio en el controlador
        return this.equiposServicios.MostarUnEquipo(id)
    }

    //Ruta para crear un equipo
    //En este caso se utiliza el decorador body porque de ahí recibe toda la información
    @Post()
    Crear(@Body()body: CrearModificarEquipo){
        return this.equiposServicios.CrearEquipo(body);
    }

    //Ruta para actualizar un equipo
    //Se recibe un parametro que es el id y el body para actualizar
    @Put(':id')
    Actualizar(@Param('id')id:number, @Body()body:CrearModificarEquipo){
        return this.equiposServicios.ActualizarEquipo(id,body);
    }

    //Ruta para eliminar un equipo
    //El delete retorna si se eliminio o no a través de un booleano
    @Delete(':id')
    Eliminar(@Param('id') id:number){
        return this.equiposServicios.EliminarEquipo(id);
    }

}
