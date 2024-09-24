import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../../services/information.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent implements OnInit{
  title : string = "Estadisticas"
  image : string = "images/lio-esr.jpg"
  

  constructor(private InfoService: InformationService){}

  stats_list : any[] = []
  stats_info: any = []
  ngOnInit(): void {
      this.stats_list = this.InfoService.getInfoStatsList()
      this.stats_info = this.InfoService.getInfoStats()
  }

}
