import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

export const necesitaNombreGuard: CanActivateFn = (route, state) => {
  console.log("State:  ", state)
  console.log("Route:  ", route)
  const userService = inject(UsuarioService);
  const router = inject(Router)
  if (userService.name()) return true;
  const urlTree = router.parseUrl("/cambiar-nombre");
  //Se coloca skipLocationChange en true, para que no cambie la url, que muestre la permitida, bajo la URL restringida.
  return new RedirectCommand(urlTree,{skipLocationChange:true})
};
