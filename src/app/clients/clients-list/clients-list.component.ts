import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ClientsService } from 'src/app/clients.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit, OnDestroy {

  jsonData : any = [{
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

  clients: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private service: ClientsService, private router: Router) { }
  
  ngOnInit() {
    this.getAllClients();
    this.dtOptions = {
      dom: '<"top"B>rt<"bottom"f>rt<"bottom"lp><"clear">',
      lengthMenu: [5, 10, 25, 50, 100],
      pagingType: 'full_numbers',
      processing: true,
      language: {
        search: "Pesquisar",
        emptyTable: "Sem dados disponíveis.",
        lengthMenu: "Exibindo _MENU_ entradas",
        info: "Exibindo de _START_ até _END_, contém: _TOTAL_ entradas",
        paginate: {
          first:      "Primeiro",
          last:       "Ultimo",
          next:       "Próximo",
          previous:   "Anterior"
        },
      }
    };
  }
  
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  newClient() {
    this.router.navigate(["clients-form"]);
  }

  getAllClients(): void {
    this.service
    .getClients()
    .subscribe((response: any) => {
      this.clients = response;
      // initiate our data table
      this.dtTrigger.next(true);
    });
  }
}
