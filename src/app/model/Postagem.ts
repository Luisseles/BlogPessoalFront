import { DatePipe } from "@angular/common"
import { Data } from "@angular/router"
import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem {
    public id: number
    public titulo: string
    public texto: string
    public date: Date
    public usuario: Usuario
    public tema: Tema

}