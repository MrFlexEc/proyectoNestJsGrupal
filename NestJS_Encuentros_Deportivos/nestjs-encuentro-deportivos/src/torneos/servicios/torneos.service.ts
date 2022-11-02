//Importamos injectable para trabajar con inyeccion de dependencia
import { Injectable, Inject } from '@nestjs/common';
//importar los patrones de repository para trabajar mas ordenado
import{Repository}from 'typeorm'
//Se importa la entidad o tabla para trabajar
import { Torneos } from '../entidades/torneos.entity';
//importamos las validaciones
import { CrearModificarTorneo } from '../validaciones/torneos.dto';

@Injectable()
export class TorneosServicios {
    //Se crea un constructor para realizar la inyección de dependencias para usar el repository
    constructor(
        @Inject("TORNEOS_REPOSITORY") private TorneosRepos: Repository<Torneos>
    ){}

    //Realizar las funciones para las peticiones

    //función para buscar todos los torneos
    async MostrarTodosTorneos(){
        return this.TorneosRepos.find();
    }

    //función para buscar un solo torneo
    MostrarUnTorneo(id: number){
        return this.TorneosRepos.findOne({
            where:{
                Id_torneo:id
            }
        });
    }

    //función para crear un torneo
    CrearUnTorneo(body:CrearModificarTorneo){
        //Creacion de la tarea con metodo create
        const newTask = this.TorneosRepos.create(body);
        //Se guarda en la base de datos esta tarea
        return this.TorneosRepos.save(newTask)
    }

    //función para modificar un torneo
    async ActualizarUnTorneo(id:number, body:CrearModificarTorneo){
        //obtener la tarea
        const taskfind= await this.TorneosRepos.findOne({
            where:{
                Id_torneo:id
            }
        });
        //Se usa la función merge que une los datos actuales con entidad con datos que vengan en el body
        this.TorneosRepos.merge(taskfind, body)
        return this.TorneosRepos.save(taskfind)
    }


    //función para eliminar un torneo
    async EliminarUnTorneo(id:number){
        await this.TorneosRepos.delete(id);
        return true;
    }
}
