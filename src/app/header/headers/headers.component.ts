import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.css',
})
export class HeadersComponent implements OnInit {
  title: string = 'Mejor Jugador del Mundo';

  menu_list: any[] = [];

  constructor(private InfoService: InformationService) {}

  ngOnInit(): void {
    this.menu_list = this.InfoService.getInfoHeaders();
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
}
