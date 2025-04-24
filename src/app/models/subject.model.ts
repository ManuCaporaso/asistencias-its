import { Student } from './student.model';

export interface Subject {
  id: string;
  name: string;
  course: string;
  year: string;
  students: Student[];
}