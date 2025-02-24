import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface Character{
  id: number
  name: string
  image: string
}
interface AppResponse{
  results: Character[]
}

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  readonly httpClient = inject(HttpClient)
  //constructor(private httpClient: HttpClient) { }
   getAll(): Observable<AppResponse>{
    return this.httpClient.get<AppResponse>('https://rickandmortyapi.com/api/character')
  }
}
