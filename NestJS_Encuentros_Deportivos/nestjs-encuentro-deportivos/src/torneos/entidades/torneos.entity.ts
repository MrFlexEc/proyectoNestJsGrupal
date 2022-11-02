//importamos typeorm con operadores a utilizar en la tabla
import {Entity, Column, PrimaryGeneratedColumn,OneToMany}from 'typeorm'
//importar la tabla con la que estará relacionada
import { Partidos} from '../../partidos/entidades/partidos.entity';

//Se crea la tabla Torneos
@Entity()
export class Torneos {

    @PrimaryGeneratedColumn('identity')
    Id_torneo:number

    @Column()
    Descripcion_torneo:string;

    @OneToMany(()=> Partidos, (torneo)=>torneo.Id_torneo)
    partidoTorneo: Partidos[];

}