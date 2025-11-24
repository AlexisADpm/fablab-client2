export interface ProjectsResponseInterface {
  usuarios:            Usuario[];
  id:                  number;
  titulo:              string;
  categoria:           string;
  descripcionProyecto: string;
  areaAplicacion:      string;
  imgUrl:              string;
  fechaInicio:         Date;
  hitoProyecto:        HitoProyecto[];
}

export interface HitoProyecto {
  id:          number;
  nombreHito:  string;
  descripcion: string;
  fecha:       Date;
}

export interface Usuario {
  id:                  number;
  nombre:              string;
  apellido:            string;
  rut:                 string;
  correoInstitucional: string;
  carrera:             string;
  telefono:            string;
  laboratorioId:       null;
  imgUrl:              string;
  laboratorio:         null;
  rolId:               number;
  rol:                 null;
}
