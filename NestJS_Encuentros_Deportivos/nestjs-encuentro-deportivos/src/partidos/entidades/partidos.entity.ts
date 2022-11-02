//importamos typeorm con operadores a utilizar en la tabla
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn}from 'typeorm'
//Importamos las tablas con la que se relacionara
import { Equipos } from 'src/equipos/entidades/equipos.entity';
import { Torneos} from '../../torneos/entidades/torneos.entity'
import { type } from 'os';
//Se crea la tabla Partidos
@Entity()
export class Partidos {

    @PrimaryGeneratedColumn('identity')
    Id_partido:number

    @Column()
    Fecha_partido:Date;

    @Column()
    Goles_equipo_1: number;

    @Column()
    Goles_equipo_2: number

    @Column()
    Observacion_partido: string

    //Llaves foráneas--------------------

    @ManyToOne(()=> Torneos, (Id_torneo)=> Id_torneo.partidoTorneo,{onDelete: 'CASCADE', onUpdate:'CASCADE'})
    @JoinColumn({name: 'Id_torneo'})
    Id_torneo:Torneos;

    @ManyToOne(()=> Equipos, (Id_equipo_1)=> Id_equipo_1.partidoEquipo1,{onDelete: 'CASCADE', onUpdate:'CASCADE'})
    @JoinColumn({name: 'Id_equipo_1'})
    Id_equipo_1:Equipos;

    @ManyToOne(()=> Equipos, (Id_equipo_2)=> Id_equipo_2.partidoEquipo2,{onDelete: 'CASCADE', onUpdate:'CASCADE'})
    @JoinColumn({name: 'Id_equipo_2'})
    Id_equipo_2:Equipos;

    //----------------
    

}