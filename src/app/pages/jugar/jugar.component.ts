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
  id = input<string>();
  constructor() {

  }
  ngOnInit(): void {
    if (!this.esPrivada() && !this.id()) {
      this.serverService.crearSala();
    }
    else if (this.id()) {
      this.serverService.unirseASala(parseInt(this.id()!))
    }
    else {
      this.serverService.crearSala(true);
    }
  }
}
