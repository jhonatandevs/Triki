import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { io } from 'socket.io-client';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  usuarioService= inject(UsuarioService)
  serverService=inject(ServerService);
  router= inject(Router)
  /** Pregunta al servidor si hay una sala publica */
  buscarSalaPublica(){
    //emitWithAck: Lo que haces es enviar una peticion, pero como si fuera HTTP,s decir
    // con una respuesta esperada de la peticion y fin de conexión.
    this.serverService.server.emitWithAck("encontrarSala").then(res=>{
      console.log("RES:  ",res)
      if(res===null) return this.router.navigate(["/jugar"])
        return this.router.navigate(["/jugar"])
    })
  }

}
