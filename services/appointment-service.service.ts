import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const endpoint='https://jsonplaceholder.typicode.com/todos/';
@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {

  constructor(private http:HttpClient) { }
  getAllPosts():Observable<any>
  {
    return this.http.get(endpoint);
    
  }
  
}
