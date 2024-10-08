import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cambiar-nombre',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './cambiar-nombre.component.html',
  styleUrl: './cambiar-nombre.component.scss'
})
export class CambiarNombreComponent {
  usuarioService = inject(UsuarioService)
  router = inject(Router)
  cambiarNombre(name: string) {
    this.usuarioService.name.set(name)
    this.router.navigate(['/'])
  }
}
