//importamos typeorm con operadores a utilizar en la tabla
import {Entity, Column, PrimaryGeneratedColumn}from 'typeorm'

//Se crea la tabla Equipos
@Entity()
export class Equipos {

    @PrimaryGeneratedColumn()
    Id_equipo:number

    @Column()
    Nombre_equipo:string;

    @Column()
    Descripcion_equipo: string;

    @Column('char',{length:1})
    Serie_equipo: string

}