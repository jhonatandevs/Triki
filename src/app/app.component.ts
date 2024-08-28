import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotoneraComponent } from "./components/botonera/botonera.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BotoneraComponent, BotoneraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Triki';
}
