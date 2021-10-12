import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'workout-app';
  ngAfterViewInit() {
    window.addEventListener('DOMContentLoaded', event => {

      // Toggle the side navigation
      const sidebarToggle = document.body.querySelector('#sidebarToggle');
      if (sidebarToggle) {
          // Uncomment Below to persist sidebar toggle between refreshes
          if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
              document.body.classList.toggle('sb-sidenav-toggled');
          }
          sidebarToggle.addEventListener('click', event => {
              event.preventDefault();
              document.body.classList.toggle('sb-sidenav-toggled');
              localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled') ? 'sb-sidenav-toggled' : '');
          });
      }

      // Simple-DataTables
      // https://github.com/fiduswriter/Simple-DataTables/wiki
      // const datatablesSimple = document.getElementById('datatablesSimple');
      // if (datatablesSimple) {
      //   new simpleDatatables.DataTable(datatablesSimple, {
      //       labels: {
      //         placeholder: "Pesquisar...",
      //         perPage: "{select} quantidades por página",
      //         info: "Exibindo de {start} até {end}, contém: {rows} entradas"
      //       }
      //     });
      // }
  
  });
  }
}
