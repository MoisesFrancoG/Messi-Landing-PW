import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../../services/information.service';

@Component({
  selector: 'app-trophies',
  templateUrl: './trophies.component.html',
  styleUrl: './trophies.component.css'
})
export class TrophiesComponent implements OnInit{
  title: string = "Títulos"
  trophies_list : any[] = []

  constructor(private infoService: InformationService){}
  ngOnInit(): void {
      this.trophies_list = this.infoService.getInfoTrophies()
  }
}
