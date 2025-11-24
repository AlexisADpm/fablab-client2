import { News } from "../../interfaces/news.interface";
import { NewsResponseInterface } from "../responseInterfaces/newsResponse";

export function newsMapperApiToNews(newResp: NewsResponseInterface): News{

  return {
    id: newResp.id,
    titulo: newResp.titulo,
    epigrafe: newResp.epigrafe,
    autor: newResp.autor,
    contenido: newResp.contenido,
    fechapublicacion: newResp.fechaPublicacion
  }
}

export function newsMapperApiToNewsArray(newsResponse: NewsResponseInterface[]): News[]{

  return newsResponse.map((newResp)=> newsMapperApiToNews(newResp));

}



