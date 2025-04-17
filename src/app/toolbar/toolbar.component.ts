import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  showSearchBar=false;
  searchTerm='';

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


  executeSearch(){

  }
}
