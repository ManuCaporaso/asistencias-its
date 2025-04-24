import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonList, 
  IonItem, IonLabel, IonBadge, IonButton, IonButtons, IonIcon 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOut } from 'ionicons/icons';

import { Subject } from '../models/subject.model';
import { SubjectService } from '../services/subject.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonList,
    IonItem, IonLabel, IonBadge, IonButton, IonButtons, IonIcon
  ]
})
export class HomePage implements OnInit {
  subjects: Subject[] = [];

  constructor(
    private router: Router,
    private subjectService: SubjectService
  ) {
    addIcons({ logOut });
  }

  ngOnInit() {
    this.loadSubjects();
  }

  loadSubjects() {
    this.subjects = this.subjectService.getSubjects();
  }

  goToAttendance(subject: Subject) {
    this.router.navigate(['/attendance', subject.id]);
  }

  logout() {
    // Aquí puedes agregar lógica adicional como limpiar localStorage
    // localStorage.removeItem('token');
    
    // Redirige al login
    this.router.navigate(['/login']);
  }
}