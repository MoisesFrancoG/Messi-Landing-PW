import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  autor : string = "Pagina web elaborada por: Moises Franco Gtz"
  
  socialMedia = [
    {img: "images/correo-electronico.png", text: "moisesfrancogtz@gmail.com"},
    {img: "images/insta.png", text: "mgtz.fy"}
  ]  
}
