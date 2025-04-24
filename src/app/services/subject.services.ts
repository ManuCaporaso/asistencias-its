import { Injectable } from '@angular/core';
import { Subject } from '../models/subject.model';
import { Student } from '../models/student.model';
import { SUBJECTS_DATA } from '../data/subjects.data';
import { MOBILE_STUDENTS } from '../data/students/desarrollomobile-students.data';
import { WEB_STUDENTS } from '../data/students/desarrolloweb-students.data';
import { PROJECTS_STUDENTS } from '../data/students/proyecto-students.data';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private subjects: Subject[] = [];

  constructor() {
    this.initializeData();
  }

  private initializeData(): void {
    // Mapeamos las materias y asignamos los estudiantes correspondientes
    this.subjects = SUBJECTS_DATA.map(subject => {
      let students: Student[] = [];
      
      switch(subject.id) {
        case '1':
          students = this.mapStudentsWithPresence(MOBILE_STUDENTS);
          break;
        case '2':
          students = this.mapStudentsWithPresence(WEB_STUDENTS);
          break;
        case '3':
          students = this.mapStudentsWithPresence(PROJECTS_STUDENTS);
          break;
      }

      return {
        ...subject,
        students
      };
    });
  }

  private mapStudentsWithPresence(students: Omit<Student, 'present'>[]): Student[] {
    return students.map(student => ({
      ...student,
      present: false // Valor inicial por defecto
    }));
  }

  getSubjects(): Subject[] {
    return this.subjects;
  }

  getSubjectById(id: string): Subject | undefined {
    return this.subjects.find(subject => subject.id === id);
  }

  // ... otros métodos ...
}