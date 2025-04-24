import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatInputModule, FormsModule, CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  showSearchBar=false;
  searchTerm='';
  constructor(private router: Router) { }
  openChiSiamoUl(){
    const chiSiamoUl=document.getElementById('chiSiamoUl');
    chiSiamoUl?.classList.toggle('visible');
  }

  openContributiUl(){
    const contributiUl=document.getElementById('contributiUl');
    contributiUl?.classList.toggle('visible');
  }

  openSearchBar(){
    this.showSearchBar=!this.showSearchBar;
  }

  closeSearchBar(){
    this.showSearchBar=false;
  }



  executeSearch(){

  }

  goToLaSezione(){
    this.router.navigate(['/la-sezione']);
  }
  
  goToStoria(){
    this.router.navigate(['/storia']);
  }

  goToGruppi(){
    this.router.navigate(['/gruppi']);
  }

  goToClan(){
    this.router.navigate(['/clan']);
  }

  goToSostenitori(){
    this.router.navigate(['/sostenitori']);
  }

  goToCinquePerMille(){
    this.router.navigate(['/cinque-per-mille']);
  }

  goToContributi(){
    this.router.navigate(['/contributi']);
  }

  goToContributi2019(){
    this.router.navigate(['/contributi-2019']);
  }

  goToSegreteria(){
    this.router.navigate(['/segreteria']);
  }
  
  goToIscrizioni(){
    this.router.navigate(['/iscrizioni']);
  }

  goToFoto(){
    this.router.navigate(['/foto']);
  }
  
}
