import {Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  name= signal<string>("");
  guardarNombreEnLocalStorage=effect(()=>localStorage.setItem('nombre',this.name()))
  constructor() { 
    const nombreLocalStorage=localStorage.getItem('nombre');
    if(nombreLocalStorage) this.name.set(nombreLocalStorage)
  }
}
