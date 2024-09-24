import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../../services/information.service';
@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrl: './biography.component.css',
})
export class BiographyComponent implements OnInit {
  constructor(public InforService: InformationService) {}

  title = '';
  text = '';
  image = '';

  ngOnInit(): void {
    this.title = this.InforService.getInfoBody().title;
    this.text = this.InforService.getInfoBody().text;
    this.image = this.InforService.getInfoBody().image;
  }

  list_titles = [
    { title: 'Seleccion Nacional', img: 'images/bandera arg.png' },
    { title: 'Club Actual', img: 'images/inter.png' },
  ];
}
