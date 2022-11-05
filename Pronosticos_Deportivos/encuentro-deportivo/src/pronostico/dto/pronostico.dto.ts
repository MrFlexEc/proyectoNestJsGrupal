//Se realiza la creación de la clase y se le agrega "export" para enviar los datos de tal forma que sea Servidor--Cliente
export class CreatePronosticoDTO {
    //Atributos asignados
    PronosticoID: string;
    apostadorID: string;
    EncuentroDeportivoID: string;
    ResultadoPropuesto: string;
    ValorApuesta: number;
    Ganancia: number;
}