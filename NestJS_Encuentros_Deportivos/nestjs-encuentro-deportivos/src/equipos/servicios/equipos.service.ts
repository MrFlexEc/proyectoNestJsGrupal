//Importamos injectable para trabajar con inyeccion de dependencia
import { Injectable, Inject } from '@nestjs/common';
//importar los patrones de repository para trabajar mas ordenado
import{Repository}from 'typeorm'
//Se importa la entidad o tabla para trabajar
import { Equipos } from '../entidades/equipos.entity'; 
//importamos las validaciones
import { CrearModificarEquipo } from '../validaciones/equipos.dto';

@Injectable()
export class EquiposServicios {
    //Se crea un constructor para realizar la inyección de dependencias para usar el repository
    constructor(
        @Inject("EQUIPOS_REPOSITORY") private EquiposRepos: Repository<Equipos>
    ){}

    //Realizar las funciones para las peticiones

    //función para buscar todos los equipos
    async MostarTodosEquipos(){
        return this.EquiposRepos.find();
    }

    //función para buscar un solo equipo
    MostarUnEquipo(id: number){
        return this.EquiposRepos.findOne({
            where:{
                Id_equipo:id
            }
        });
    }

    //función para crear un equipo
    CrearEquipo(body:CrearModificarEquipo){
        //Creacion de la tarea con metodo create
        const newTask = this.EquiposRepos.create(body);
        //Se guarda en la base de datos esta tarea
        return this.EquiposRepos.save(newTask)
    }

    //función para modificar una equipo
    async ActualizarEquipo(id:number, body:CrearModificarEquipo){
        //obtener la tarea
        const taskfind= await this.EquiposRepos.findOne({
            where:{
                Id_equipo:id
            }
        });
        //Se usa la función merge que une los datos actuales con entidad con datos que vengan en el body
        this.EquiposRepos.merge(taskfind, body)
        return this.EquiposRepos.save(taskfind)
    }


    //función para eliminar un equipo
    async EliminarEquipo(id:number){
        await this.EquiposRepos.delete(id);
        return true;
    }
}
