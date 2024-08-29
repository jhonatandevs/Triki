import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cambiar-nombre',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cambiar-nombre.component.html',
  styleUrl: './cambiar-nombre.component.scss'
})
export class CambiarNombreComponent {
  usuarioService = inject(UsuarioService)
  cambiarNombre(name: string) {
    this.usuarioService.name.set(name)

  }
}
