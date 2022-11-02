//importamos typeorm con operadores a utilizar en la tabla
import {Entity, Column, PrimaryGeneratedColumn, OneToMany}from 'typeorm'
//importar la tabla con la que estará relacionada
import { Partidos } from 'src/partidos/entidades/partidos.entity';

//Se crea la tabla Equipos
@Entity()
export class Equipos {

    @PrimaryGeneratedColumn('identity')
    Id_equipo:number

    @Column()
    Nombre_equipo:string;

    @Column()
    Descripcion_equipo: string;

    @Column('char',{length:1})
    Serie_equipo: string

    
    
    @OneToMany(()=> Partidos, (partido)=>partido.Id_equipo_1)
    partidoEquipo1: Partidos;
    @OneToMany(()=> Partidos, (partido)=>partido.Id_equipo_2)
    partidoEquipo2: Partidos[];
    
}