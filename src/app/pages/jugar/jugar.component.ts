import { Component, inject, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServerService } from '../../services/server.service';
import { CrearSalaArgs } from '../../interfaces/crearSala';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-jugar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './jugar.component.html',
  styleUrl: './jugar.component.scss'
})
export class JugarComponent {
  serverService = inject(ServerService)
  userService = inject(UsuarioService)
  esPrivada = input();
  id = input();
  constructor() {
    const args: CrearSalaArgs = {
      publica: true,
      nombreJugador: this.userService.name()
    }
    this.serverService.server.emitWithAck("crearSala", args).then(res => {
      console.log("Crear Sala", res)
    })
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("ID:  ", this.id())
  }
}
