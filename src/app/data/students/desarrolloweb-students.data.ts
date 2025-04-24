import { Student } from '../../models/student.model';

export const WEB_STUDENTS: Omit<Student, 'present'>[] = [
  { 
    id: '003', 
    firstName: 'Emiliano', 
    lastName: 'Martinez',
    avatar: 'assets/images/avatares/avatar3.PNG' 
  },
  { 
    id: '004', 
    firstName: 'Julian',
    lastName: 'Alvarez', 
    avatar: 'assets/images/avatares/avatar4.PNG' 
  }
];