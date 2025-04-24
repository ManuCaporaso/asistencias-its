import { Student } from '../../models/student.model';

export const MOBILE_STUDENTS: Omit<Student, 'present'>[] = [
  { 
    id: '001', 
    firstName: 'Leonel', 
    lastName: 'Messi',
    avatar: 'assets/images/avatares/avatar1.PNG' 
  },
  { 
    id: '002', 
    firstName: 'Rodrigo',
    lastName: 'De Paul', 
    avatar: 'assets/images/avatares/avatar2.PNG' 
  },
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