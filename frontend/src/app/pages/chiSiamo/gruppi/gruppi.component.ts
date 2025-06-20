import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-gruppi',
  imports: [RouterModule, CommonModule],
  templateUrl: './gruppi.component.html',
  styleUrl: './gruppi.component.css'
})
export class GruppiComponent {

  gruppi = [
    { nome: 'Gruppo Firenze 1', descrizione: 'svolge le sue attività nelle zone di Novoli, Rifredi e Castello.' },
    { nome: 'Gruppo Firenze 2', descrizione: 'svolge le sue attività nelle zone delle Cure, Coverciano, Campo di Marte e del Centro Storico.' },
    { nome: 'Gruppo Firenze 3', descrizione: 'svolge le sue attività nelle zone di Isolotto, Scandicci, Porta Romana, Oltrarno.' },
    { nome: 'Gruppo Firenze 4', descrizione: 'svolge le sue attività nelle zone di Gavinana, Galluzzo, Bagno a Ripoli, Grassina e Antella.' },
    { nome: 'Gruppo Firenze 5', descrizione: 'svolge le sue attività a Campi Bisenzio, San Donnino e nelle zone limitrofe.' },
    { nome: 'Gruppo Firenze 6', descrizione: 'svolge le sue attività a Sesto Fiorentino, Calenzano e nelle zone limitrofe.' }
  ];


}
