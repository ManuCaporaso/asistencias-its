import { Subject } from '../models/subject.model';

export const SUBJECTS_DATA: Omit<Subject, 'students'>[] = [
  {
    id: '1',
    name: 'Desarrollo Mobile',
    course: 'A',
    year: '2025'
  },
  {
    id: '2',
    name: 'Desarrollo Web',
    course: 'B',
    year: '2025'
  },
  {
    id: '3',
    name: 'Gestión de Proyectos',
    course: 'C',
    year: '2025'
  }
];