import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InformationService {
  constructor() {}

  getInfoHeaders() {
    return [
      { text: 'Biografia' },
      { text: 'Estadisticas' },
      { text: 'Palmares' },
    ];
  }

  getInfoBody() {
    return {
      title: 'Lionel Andres Messi Cuccittini',
      text: 'Lionel Andrés Messi Cuccittini(Rosario, 24 de junio de 1987), conocido como Leo Messi, es un futbolista argentino que juega como delantero o centrocampista. Desde 2023, integra el plantel del Inter Miami de la MLS canadoestadounidense. Es también internacional con la selección de Argentina, de la que es capitán.Considerado con frecuencia el mejor jugador del mundo y uno de los mejores de todos los tiempos,​ es el único en la historia que ha ganado, entre otras distinciones, ocho veces el Balón de Oro, ocho premios de la FIFA al mejor jugador del mundo, seis Botas de Oro y dos Balones de Oro de la Copa Mundial de Fútbol.',
      image: 'images/lionel.jpg',
    };
  }

  getInfoStatsList() {
    return [
      { text: '838 Goles' },
      { text: '375 Asistencias' },
      { text: '1067 Partidos' },
      { text: '45 Titulos' },
      { text: '57 Premios' },
    ];
  }

  getInfoStats() {
    return [
      {team : "FC BARCELONA",img : "images/barcelona.png",goals : "672 Goles",assists : "269 Asistencias"},
      {team : "PSG",img : "images/psg.png",goals : "32 Goles",assists : "34 Asistencias"},
      {team : "INTER MIAMI",img : "images/inter.png",goals : "26 Goles",assists : "16 Asistencias"},
      {team : "ARGENTINA",img : "images/escudo.png",goals : "108 Goles",assists : "56 Asistencias"},
    ]
  }

  getInfoTrophies() {
    return [
      {image: "images/champions.png", name: "Champions League", number: "4"},
      {image: "images/liga.png", name: "LaLiga", number: "10"},
      {image: "images/copa-del-rei.png", name: "Copa del Rey", number: "7"},
      {image: "images/spanish-supercup.png", name: "Supercopa de España", number: "8"},
      {image: "images/mundialito-de-clubs.png", name: "Mundial de Clubes", number: "3"},
      {image: "images/european-supercup.png", name: "Supercopa de Europa", number: "3"},
      {image: "images/ligue1.png", name: "Ligue 1", number: "2"},
      {image: "images/supercopa-psg-1.png", name: "Tropheé des Champions", number: "1"},
      {image: "images/leagues.png", name: "Leagues Cup", number: "1"},
      {image: "images/Copa-america.png", name: "Copa America", number: "2"},
      {image: "images/sub-20.png", name: "Mundial Sub 20", number: "1"},
      {image: "images/medalal-oro.png", name: "Medalla de Oro Juegos Olimpicos Beijing", number: "1"},
      {image: "images/f.png", name: "Finalissima", number: "1"},
      {image: "images/mundial-futbol.png", name: "Copa del Mundo", number: "1"},
    ]
  }
}
