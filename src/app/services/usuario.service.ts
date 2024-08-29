import {Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  name= signal<string>("")
  constructor() { }
}
