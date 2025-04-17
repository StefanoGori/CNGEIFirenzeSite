import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-toolbar',
  imports: [MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {


  openChiSiamoUl(){
    const chiSiamoUl=document.getElementById('chiSiamoUl');
    chiSiamoUl?.classList.toggle('visible');
  }

  openContributiUl(){
    const contributiUl=document.getElementById('contributiUl');
    contributiUl?.classList.toggle('visible');
  }
}
