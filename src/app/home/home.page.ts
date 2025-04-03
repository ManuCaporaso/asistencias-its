import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonBadge 
} from '@ionic/angular/standalone';

interface Subject {
  id: number;
  name: string;
  course: string;
  year: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonBadge
  ]
})
export class HomePage {
  subjects: Subject[] = [
    { id: 1, name: 'Matemáticas', course: 'A', year: '2023' },
    { id: 2, name: 'Literatura', course: 'B', year: '2023' },
    { id: 3, name: 'Física', course: 'C', year: '2023' },
  ];

  constructor(private router: Router) {}

  goToAttendance(subject: Subject) {
    this.router.navigate(['/attendance', subject.id]);
  }
}