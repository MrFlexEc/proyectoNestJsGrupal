//Importamos los metodos del CRUD get, post, put, delete en el decorador
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
//importamos servicios los cuales tienen las funciones que responderan al cliente
import { EquiposServicios } from '../servicios/equipos.service'; 


@Controller('api/rest/equipos')
export class EquiposController {

    //Se realiza una iyeccion de dependencia para que el controlador pueda ejecutar las funciones
    constructor(
        private equiposServicios: EquiposServicios
    ){}

//Se definen las rutas 

//Ruta para devolver todos los equipos
@Get()
getAll(){
    return this.equiposServicios.findAll();
}
//Ruta para devolver la información de un equipo
//En este caso se utiliza un id y para recibir un paramametro con el decorador @Param
@Get('/:id')
getOne(@Param('id') id: number){
    //Se utiliza el findOne el cuale se le pasará id que recogio en el controlador
    return this.equiposServicios.findOne(id)
}

//Ruta para crear un equipo
//En este caso se utiliza el decorador body porque de ahí recibe toda la informacion
@Post()
createPost(@Body()body: any){
    return this.equiposServicios.create(body);
}

//Ruta para actualizar un equipo
//Se recibe un parametro que es el id y el body para actualizar
@Put(':id')
UpdatePut(@Param('id')id:number, @Body()body:any){
    return this.equiposServicios.update(id,body);
}

//Ruta para eliminar un equipo
//El delete retorna se se eliminio o no a traves de un booleano
@Delete(':id')
delete(@Param('id') id:number){
    return this.equiposServicios.delete(id);
}

}
