import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent  {

  mostrar=true;
  mostra=true;
  lugaresFav: string[] =['Anita', 'Familia', 'Amigos'];

}
