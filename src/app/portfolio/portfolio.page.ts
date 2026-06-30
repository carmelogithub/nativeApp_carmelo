import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonSpinner, IonCard, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { Api } from '../services/api';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardTitle, IonCard, IonSpinner, IonCardHeader, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PortfolioPage implements OnInit {

  posts:any[]=[];
  loading=false;


  constructor(private api:Api) { }

  async ngOnInit() {
    try {
      this.loading=true;
      this.posts=await this.api.getPosts();
    } catch (error) {
      console.error(error);
    }
    finally{
      this.loading=false;
    }
  }

}
