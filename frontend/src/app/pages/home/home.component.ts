import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-home',
  imports: [MatGridListModule, CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {
  articles = [
    { id: 1, title: "Ultimo articolo", image: "https://picsum.photos/200/300?random=1" },
    { id: 2, title: "Secondo articolo", image: "https://picsum.photos/200/300?random=2" },
    { id: 3, title: "Terzo articolo", image: "https://picsum.photos/200/300?random=3" },
    { id: 4, title: "Quarto articolo", image: "https://picsum.photos/200/300?random=4" },
    { id: 5, title: "Quinto articolo", image: "https://picsum.photos/200/300?random=5" },
    { id: 6, title: "Sesto articolo", image: "https://picsum.photos/200/300?random=6" },
    { id: 7, title: "Settimo articolo", image: "https://picsum.photos/200/300?random=7" },
    { id: 8, title: "Ottavo articolo", image: "https://picsum.photos/200/300?random=8" },
    { id: 9, title: "Nono articolo", image: "https://picsum.photos/200/300?random=9" },
    { id: 10, title: "Decimo articolo", image: "https://picsum.photos/200/300?random=10" },
    { id: 11, title: "Undicesimo articolo", image: "https://picsum.photos/200/300?random=11" },
    { id: 12, title: "Dodicesimo articolo", image: "https://picsum.photos/200/300?random=12" },
    { id: 13, title: "Tredicesimo articolo", image: "https://picsum.photos/200/300?random=13" },
    { id: 14, title: "Quattordicesimo articolo", image: "https://picsum.photos/200/300?random=14" },
    { id: 15, title: "Quindicesimo articolo", image: "https://picsum.photos/200/300?random=15" }
  ];

}
