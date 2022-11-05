//Se realiza la creación de la clase y se le agrega "export" para enviar los datos de tal forma que sea Servidor--Cliente
export class CreateEncuentroDeportivoDTO {
    //Atributos asignados
    ID_Encuentro_deportivo: string;
    Equipo1: string;
    Equipo2: string;
    Fecha: string;
    Hora: string;
    Lugar_Partido: string;
}