export interface ProjectsInterface {
  projectId: number;
  participantes: Participantes[];
  title: string;
  description: string;
  date: Date;
  imgUrl: string;
}

export interface Participantes {
  nombre: string;
  carrera: string;
  rut: string;
  foto: string;
}
