import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonList, 
  IonItem, IonLabel, IonToggle, IonButtons, IonButton, 
  IonIcon, IonAvatar, IonSpinner,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { save, arrowBack } from 'ionicons/icons';
import { Subject } from '../models/subject.model';
import { SubjectService } from '../services/subject.services';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonList,
    IonItem, IonLabel, IonToggle, IonButtons, IonButton,
    IonIcon, IonAvatar, IonSpinner
  ]
})
export class AttendancePage implements OnInit {
  currentSubject: Subject | null = null;
  currentDate: Date = new Date();

  constructor(
    private route: ActivatedRoute,
    private alertController: AlertController,
    private router: Router,
    private subjectService: SubjectService
  ) {
    addIcons({ save, arrowBack });
  }

  ngOnInit() {
    const subjectId = this.route.snapshot.paramMap.get('id');
    if (subjectId) {
      const subject = this.subjectService.getSubjectById(subjectId);
      if (subject) {
        this.currentSubject = subject;
      } else {
        this.showErrorAlert();
      }
    }
  }

  private async showErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Materia no encontrada',
      buttons: [{
        text: 'OK',
        handler: () => this.router.navigate(['/home'])
      }]
    });
    await alert.present();
  }

  async saveAttendance() {
    if (!this.currentSubject) return;
    
    const alert = await this.alertController.create({
      header: 'Asistencia guardada',
      message: `La asistencia de ${this.currentSubject.name} ha sido registrada`,
      buttons: ['OK']
    });
    await alert.present();
    
    console.log('Asistencia guardada:', {
      subject: this.currentSubject.name,
      students: this.currentSubject.students
    });
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}