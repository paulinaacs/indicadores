export interface Indicador{

    "version": string,
    "autor": string,
    "codigo": string,
    "nombre": string,
    "unidad_medida": string,
    "serie": {
        "fecha": string,
        "valor": string
    }
}