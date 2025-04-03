import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonToggle,
  IonButtons,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { save, arrowBack } from 'ionicons/icons';

interface Student {
  id: string;
  name: string;
  present: boolean;
}

interface Subject {
  id: string | null;
  name: string;
  course: string;
  year: string;
}

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonToggle,
    IonButtons,
    IonButton,
    IonIcon
  ]
})
export class AttendancePage implements OnInit {
  currentSubject: Subject = {
    id: null,
    name: '',
    course: '',
    year: ''
  };
  currentDate: Date = new Date();
  students: Student[] = [
    { id: '001', name: 'Juan Pérez', present: true },
    { id: '002', name: 'María Gómez', present: true },
    { id: '003', name: 'Carlos López', present: false },
  ];

  constructor(
    private route: ActivatedRoute,
    private alertController: AlertController,
    private router: Router
  ) {
    addIcons({ save, arrowBack });
  }

  ngOnInit() {
    const subjectId = this.route.snapshot.paramMap.get('id');
    this.currentSubject = {
      id: subjectId,
      name: 'Desarrollo Mobile', // Esto debería venir de tu servicio/API
      course: 'A',         // Esto debería venir de tu servicio/API
      year: '2025'         // Esto debería venir de tu servicio/API
    };
  }

  async saveAttendance() {
    const alert = await this.alertController.create({
      header: 'Asistencia guardada',
      message: 'La asistencia ha sido registrada correctamente',
      buttons: ['OK']
    });
    await alert.present();
    console.log('Asistencia:', this.students);
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}