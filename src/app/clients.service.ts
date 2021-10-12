import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Client } from './clients/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  save(client: Client) : Observable<Client> {
    return this.http.post<Client>('http://localhost:8081/api/clients', client);
  }


  getClients(): any[] {
    let client: Client = new Client();
    client.id = 1;
    client.typeUser="ALUNO";
    client.name = "Anja";
    client.birthDate = "2021-10-05";
    return  [{
      playerName: 'Cristiano Ronaldo',
      playerCountry: 'Pourtgal',
      playerClub: 'Juventus'
    },
    {
      playerName: 'Lionel Messi',
      playerCountry: 'Argentina',
      playerClub: 'Barcelona'
    },
    {
      playerName: 'Neymar Junior',
      playerCountry: 'Brazil',
      playerClub: 'PSG'
    },
    {
    playerName: 'Tonni Kroos',
    playerCountry: 'Germany',
    playerClub: 'Real Madrid'
    },
    {
      playerName: 'Paul Pogba',
      playerCountry: 'France',
      playerClub: 'Manchester United'
    },
    {
      playerName: 'Sergio Ramos',
      playerCountry: 'Espain',
      playerClub: 'Real Madrid'
    },
    {
      playerName: 'H. Kane',
      playerCountry: 'England',
      playerClub: 'Tottanhum'
    },
    {
      playerName: 'Luiz Suarez',
      playerCountry: 'Urgway',
      playerClub: 'Atletico Madrid'
    },
    {
      playerName: 'Eden Hazard',
      playerCountry: 'Belgium',
      playerClub: 'Real Madrid'
    },
    {
      playerName: 'Vinicious Junior',
      playerCountry: 'Brazil',
      playerClub: 'Real Madrid'
    },
    {
      playerName: 'Karim Benzema',
      playerCountry: 'France',
      playerClub: 'Real Madrid'
    },
    {
      playerName: 'Ant. Grizzeman',
      playerCountry: 'France',
      playerClub: 'Barcelona'
    },
    {
      playerName: 'Sadio Mane',
      playerCountry: 'NA',
      playerClub: 'Liverpool'
    }];    
  }
}
