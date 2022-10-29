//Importamos injectable para trabajar con inyeccion de dependencia
import { Injectable, Inject } from '@nestjs/common';
//importar los patrones de repository para trabajar mas ordenado
import{Repository}from 'typeorm'
//Se importa la entidad o tabla para trabjar
import { Equipos } from '../entidades/equipo.entity'; 

@Injectable()
export class EquiposServicios {
    //Se crea un constructor para realizar la inyeccion de dependencias para usar el repository
    constructor(
        @Inject("EQUIPOS _REPOSITORY") private EquiposRepos: Repository<Equipos>
    ){}

    //Realizar las funciones para las peticiones

    //función para buscar todos los equipos
    async findAll(){
        return this.EquiposRepos.find();
    }

    //función para buscar un solo equipo
    findOne(id: number){
        return this.EquiposRepos.findOne({
            where:{
                Id_equipo:id
            }
        });
    }

    //función para crear un equipo
    create(body:any){
        //Creacion de la tarea con metodo create
        const newTask = this.EquiposRepos.create(body);
        //Se guarda en la base de datos esta tarea
        return this.EquiposRepos.save(newTask)
    }

    //función para modificar una equipo
    async update(id:number, body:any){
        //obtener la tarea
        const taskfind= await this.EquiposRepos.findOne({
            where:{
                Id_equipo:id
            }
        });
        //Se usa la funcion merge que une los datos actuales con entidad con datos que vengan en el body
        this.EquiposRepos.merge(taskfind, body)
        return this.EquiposRepos.save(taskfind)
    }


    //función para eliminar un equipo
    async delete(id:number){
        await this.EquiposRepos.delete(id);
        return true;
    }
}
