import { ProjectsInterface } from "../../interfaces/projects.interface";
import { ProjectsResponseInterface } from "../responseInterfaces/projectsResponse";
import { usersMapperApiToUsersArray } from "./userMapper";


export function projectsMapperApiToProjects(projectResp: ProjectsResponseInterface): ProjectsInterface{

  return {
    projectId: projectResp.id,
    title: projectResp.titulo,
    description: projectResp.descripcionProyecto,
    categoria: projectResp.categoria,
    date: projectResp.fechaInicio,
    imgUrl: projectResp.imgUrl,
    participantes: usersMapperApiToUsersArray(projectResp.usuarios)

  }
}

export function projectsMapperApiToProjectsArray(projectsResponse: ProjectsResponseInterface[]): ProjectsInterface[]{

  return projectsResponse.map((projectResp)=> projectsMapperApiToProjects(projectResp));

}
