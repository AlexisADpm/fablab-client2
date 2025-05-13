import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';


interface person{
  userId: number,
  id: number,
  title:string,
  body:string
}

@Component({
  selector: 'app-card',
  imports: [JsonPipe],
  templateUrl: './card.component.html',
})
export class CardComponent {

  //test peticion http



  signalPosts = signal<string>("posts")


  //Recurso asincrono reacti
  // ... (definición de userId, userSearch$, requestParams, getRequest)
  http = inject(HttpClient);

  // Ejemplo con Signal
  user = rxResource(
    {request: ()=>({query: this.signalPosts()}),
  loader: ({request})=>{
    return this.http.get<person[]>(`https://jsonplaceholder.typicode.com/${request.query}`);
  }}
  )

  // Ejemplo con Observable

  // Ejemplo con Request Factory

  // ...
}





