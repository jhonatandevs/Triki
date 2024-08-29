import { inject, Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { UsuarioService } from './usuario.service';
import { CrearSalaArgs } from '../interfaces/crearSala';
import { UnirseASalaCrearSalaArgs } from '../interfaces/unirseASala';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  server = io("localhost:3000", { autoConnect: false })
  usuarioService = inject(UsuarioService)
  constructor() {
    this.server.on("connect", () => {
      console.log("Conectado al back")
    });
    //ESTE MENSAJE LLEGA A TODOS MENOS A QUIEN LO EMITE, ES PARA ENTERAR DEL INGRESO AL RESTO DE MIEMBROS
    this.server.on("sala", (args) => console.log("Mensaje para los integrantes de la sala", args))
    this.server.onAny(event => console.log("OnAny:  ", event));
    this.server.connect();
    this.server.emit("Mensaje custom");
  }
  crearSala(esPrivada: boolean = false) {
    const args: CrearSalaArgs = {
      publica: !esPrivada,
      nombreJugador: this.usuarioService.name()
    }
    //emitWithAck es una conexión, con parecidos a una query html, trae una respuesta del server y termina conexion
    this.server.emitWithAck("crearSala", args).then(res => {
      console.log("Crear Sala", res)
    })
  }
  unirseASala(id: number) {
    const args: UnirseASalaCrearSalaArgs = {
      id,
      nombreJugador: this.usuarioService.name()
    }
    this.server.emitWithAck("unirseASala", args).then(res => {
      console.log("Resultado de unirse a sala desde front", res)
    })
  }
}
