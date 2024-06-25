import { Curso } from '../../models/curso-to';

export const cursos: Curso[] = [
  {
    materia: 'Javascript',
    dificultad: 9,
    requiere: 'HTML, CSS',
  },
  {
    materia: 'Typescript',
    dificultad: 7,
    requiere: 'Javascript',
  },
  {
    materia: 'Angular',
    dificultad: 9,
    requiere: 'Typescript',
  },
  {
    materia: 'React',
    dificultad: 7,
    requiere: 'Javascript',
  },
];
