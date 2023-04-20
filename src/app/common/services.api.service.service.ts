import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adult } from '../features/people/components/overview/models/adults.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getAdults(): Observable<Adult[]>{
    return this.http.get('http://13.51.252.168:8080/adult') as Observable<Adult[]>;
  }
  getAvgChildAger(): Observable<number>{
    return this.http.get('http://13.51.252.168:8080/child/avg') as Observable<number>;
  }
}
