//Importamos injectable para trabajar con inyeccion de dependencia
import { Injectable, Inject } from '@nestjs/common';
//importar los patrones de repository para trabajar mas ordenado
import{Repository}from 'typeorm'
//Se importa la entidad o tabla para trabajar
import { Partidos } from '../entidades/partidos.entity';
//importamos las validaciones
import { CrearModificarPartido } from '../validaciones/partidos.dto';


@Injectable()
export class PartidosServicios {
    //Se crea un constructor para realizar la inyección de dependencias para usar el repository
    constructor(
        @Inject("PARTIDOS_REPOSITORY") private PartidosRepos: Repository<Partidos>,
    ){}

    //Realizar las funciones para las peticiones

    //función para buscar todos los Partidos
    async MostrarTodosPartidos(){
        return this.PartidosRepos.find({
            relations:[
                 'Id_torneo',
                 'Id_equipo_1',
                 'Id_equipo_2'
            ]
        });
    }

    //función para buscar un solo partido
    MostrarUnPartido(id: number){
        return this.PartidosRepos.find({
            where:{
                Id_partido:id
            },
            relations:[
                'Id_torneo',
                'Id_equipo_1',
                'Id_equipo_2'
           ]
        });
    }

    //función para crear un partido
    async CrearUnPartido(body:CrearModificarPartido){
        //Creacion de la tarea con metodo create
        const newTask = this.PartidosRepos.create(body);
        //Se guarda en la base de datos esta tarea
        return this.PartidosRepos.save(newTask)
    }

    //función para modificar un partido
    async ActualizarUnPartido(id:number, body:CrearModificarPartido){
        //obtener la tarea
        const taskfind= await this.PartidosRepos.findOne({
            where:{
                Id_partido:id
            }
        });
        //Se usa la función merge que une los datos actuales con entidad con datos que vengan en el body
        this.PartidosRepos.merge(taskfind, body)
        return this.PartidosRepos.save(taskfind)
    }


    //función para eliminar un partido
    async EliminarUnPartido(id:number){
        await this.PartidosRepos.delete(id);
        return true;
    }
}
