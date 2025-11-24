import { Participantes } from "../../interfaces/projects.interface";
import { Usuario } from "../responseInterfaces/projectsResponse";

export function usersMapperApiToUsers(userResp: Usuario): Participantes{

  return {
    nombre: userResp.nombre,
    carrera: userResp.carrera,
    rut: userResp.carrera,
    foto: userResp.imgUrl
  }
}

export function usersMapperApiToUsersArray(userResponse: Usuario[]): Participantes[]{

  return userResponse.map((userResp)=> usersMapperApiToUsers(userResp));

}
