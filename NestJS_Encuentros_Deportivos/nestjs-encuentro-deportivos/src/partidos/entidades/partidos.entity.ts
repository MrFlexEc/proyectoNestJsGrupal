//importamos typeorm con operadores a utilizar en la tabla
import {Entity, Column, PrimaryGeneratedColumn}from 'typeorm'

//Se crea la tabla Partidos
@Entity()
export class Partidos {

    @PrimaryGeneratedColumn()
    Id_partido:number

    @Column()
    Fecha_partido:Date;

    @Column()
    Goles_equipo_1: number;

    @Column('char',{length:1})
    Goles_equipo_2: number

    @Column()
    Observacion_partido: string
    
    //faltan llaves primarias

}