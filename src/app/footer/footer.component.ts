import { Component } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-footer',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent {

  footerFormEmail!: FormGroup;
  footerFormNews!: FormGroup;

  news=[
    {value: 'news 1', label: 'News 1'},
    {value: 'news 2', label: 'News 2'},
    {value: 'news 3', label: 'News 3'},
  ];

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  createForm(){
    this.footerFormEmail = this.fb.group({
      email:['',Validators.email]
    });
    console.log(this.news);
    this.footerFormNews = this.fb.group({
      news:['']
    });
  }

  onSubmitEmail(){
    console.log(this.footerFormEmail.value);
  }

  onSubmitNews(){
    const selectedNews = this.footerFormNews.get('news')?.value;
    console.log(selectedNews);
  }
}
