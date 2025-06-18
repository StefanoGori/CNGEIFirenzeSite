import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';



@Component({
  selector: 'app-home',
  imports: [MatGridListModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {
  articles = [
    { id: 1, title: "Ultimo articolo" },
    { id: 2, title: "Secondo articolo" },
    { id: 3, title: "Terzo articolo" },
    { id: 4, title: "Quarto articolo" },
    { id: 5, title: "Quinto articolo" },
    { id: 6, title: "Sesto articolo" },
    { id: 7, title: "Settimo articolo" },
    { id: 8, title: "Ottavo articolo" },
    { id: 9, title: "Nono articolo" },
    { id: 10, title: "Decimo articolo" },
    { id: 11, title: "Undicesimo articolo" },
    { id: 12, title: "Dodicesimo articolo" },
    { id: 13, title: "Tredicesimo articolo" },
    { id: 14, title: "Quattordicesimo articolo" },
    { id: 15, title: "Quindicesimo articolo" }
  ];

}
