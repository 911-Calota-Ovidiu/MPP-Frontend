import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adult, AdultDTO } from '../features/people/components/overview/models/adults.models';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Child } from '../features/children/children.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  address:string='https://https://mpporiginal.mooo.com'
  getAdults(): Observable<AdultDTO[]>{
    return this.http.get(this.address+'/adult/page/0') as Observable<AdultDTO[]>;
  }
  getAdultCount():Observable<number>{
    return this.http.get(this.address+'/adult/count') as Observable<number>;
  }
  getAdultsPage(page:number):Observable<AdultDTO[]>{
    return this.http.get(this.address+`/adult/page/${page}`) as Observable<AdultDTO[]>;
  }
  getAvgChildAger(): Observable<number>{
    return this.http.get(this.address+'/child/avg') as Observable<number>;
  }
  deleteAdult(id:number):Observable<string>{
    return this.http.delete(this.address+`/adult/${id}`) as Observable<string>;
  }
  updateAdult(adult:Adult,id?:number): Observable<string>{
    return this.http.put(this.address+`/adult/${id}`,adult) as Observable<string>;
  }
  addAdult(adult:Adult): Observable<string>{
    return this.http.post(this.address+`/adult`,adult) as Observable<string>;
  }
  getAdultID(personId:number):Observable<AdultDTO>
  {
    return this.http.get(this.address+`/adult/${personId}`) as Observable<AdultDTO>
  }
  getChildren(): Observable<Child[]>{
    return this.http.get(this.address+`/child`) as Observable<Child[]>
  }
  deleteChild(id:number):Observable<string>{
    return this.http.delete(this.address+`/child/${id}`) as Observable<string>;
  }
  updateChild(child:Child,id:number): Observable<string>{
    return this.http.put(this.address+`/child/address`,child) as Observable<string>;
  }
  //getChildID
  //getFamilies
  //addChildToFamily
  //removeFamily

}
