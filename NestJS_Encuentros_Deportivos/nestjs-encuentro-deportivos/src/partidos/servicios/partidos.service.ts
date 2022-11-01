//Importamos injectable para trabajar con inyeccion de dependencia
import { Injectable, Inject } from '@nestjs/common';
//importar los patrones de repository para trabajar mas ordenado
import{Repository}from 'typeorm'
//Se importa la entidad o tabla para trabjar
import { Partidos } from '../entidades/partidos.entity';

@Injectable()
export class PartidosServicios {
    //Se crea un constructor para realizar la inyeccion de dependencias para usar el repository
    constructor(
        @Inject("PARTIDOS _REPOSITORY") private PartidosRepos: Repository<Partidos>
    ){}

    //Realizar las funciones para las peticiones

    //función para buscar todos los Partidos
    async MostrarTodosPartidos(){
        return this.PartidosRepos.find();
    }

    //función para buscar un solo partido
    MostrarUnPartido(id: number){
        return this.PartidosRepos.findOne({
            where:{
                Id_partido:id
            }
        });
    }

    //función para crear un partido
    CrearUnPartido(body:any){
        //Creacion de la tarea con metodo create
        const newTask = this.PartidosRepos.create(body);
        //Se guarda en la base de datos esta tarea
        return this.PartidosRepos.save(newTask)
    }

    //función para modificar un partido
    async ActualizarUnPartido(id:number, body:any){
        //obtener la tarea
        const taskfind= await this.PartidosRepos.findOne({
            where:{
                Id_partido:id
            }
        });
        //Se usa la funcion merge que une los datos actuales con entidad con datos que vengan en el body
        this.PartidosRepos.merge(taskfind, body)
        return this.PartidosRepos.save(taskfind)
    }


    //función para eliminar un partido
    async EliminarUnPartido(id:number){
        await this.PartidosRepos.delete(id);
        return true;
    }
}
