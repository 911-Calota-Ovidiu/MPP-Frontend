import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adult, AdultDTO } from '../features/people/components/overview/models/adults.models';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Child, ChildDTO } from '../features/children/children.models';
import { Family, FamilyDTO } from '../features/families/components/families.models';
import { Friend } from '../features/friends/friends.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  address:string='http://mpporiginal.mooo.com'
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
  getChildCount():Observable<number>{
    return this.http.get(this.address+'/child/count') as Observable<number>;
  }
  getChildren(): Observable<ChildDTO[]>{
    return this.http.get(this.address+`/child/page/0`) as Observable<ChildDTO[]>
  }
  getChildrenPage(page:number):Observable<ChildDTO[]>{
    return this.http.get(this.address+`/child/page/${page}`) as Observable<ChildDTO[]>;
  }
  deleteChild(id:number):Observable<string>{
    return this.http.delete(this.address+`/child/${id}`) as Observable<string>;
  }
  updateChild(child:Child,id?:number): Observable<string>{
    return this.http.put(this.address+`/child/${id}/1`,child) as Observable<string>;
  }
  getChildID(personId:number):Observable<ChildDTO>
  {
    return this.http.get(this.address+`/child/${personId}`) as Observable<ChildDTO>
  }
  addChild(child:Child): Observable<string>{
    return this.http.post(this.address+`/child/1007/family`,child) as Observable<string>;
  }
  getFamiliesPage(page:number):Observable<FamilyDTO[]>{
    return this.http.get(this.address+`/family/page/${page}`) as Observable<FamilyDTO[]>;
  }
  getFamilies():Observable<FamilyDTO[]>{
    return this.http.get(this.address+`/family/page/1`) as Observable<FamilyDTO[]>;
  }
  getFamilyCount():Observable<number>{
    return this.http.get(this.address+'/family/count') as Observable<number>;
  }
  deleteFamily(id:number):Observable<string>{
    return this.http.delete(this.address+`/family/${id}`) as Observable<string>;
  }
  updateFamily(family:Family,id?:number): Observable<string>{
    return this.http.put(this.address+`/family/${id}`,family) as Observable<string>;
  }
  getFamilyID(personId:number):Observable<FamilyDTO>
  {
    return this.http.get(this.address+`/family/${personId}`) as Observable<FamilyDTO>
  }
  addFamily(family:Family): Observable<string>{
    return this.http.post(this.address+`/family`,family) as Observable<string>;
  }
  addChildtoFamily(child:number,family:number): Observable<string>{
    return this.http.post(this.address+`/family/child/${family}/${child}`,null) as Observable<string>;
  }
  addFriend(f1:number,f2:number): Observable<string>{
    return this.http.post(this.address+`/friend/${f1}/${f2}`,null) as Observable<string>;
  }
  deleteFriend(id:number):Observable<string>{
    return this.http.delete(this.address+`/friends/${id}`) as Observable<string>;
  }
  getFriendsPage(page:number): Observable<Friend[]>{
    return this.http.get(this.address+`/friends/page/${page}`) as Observable<Friend[]>;
  }
  getFriendsCount():Observable<number>{
    return this.http.get(this.address+'/friends/count') as Observable<number>;
  }
  getOneFriend(id:number):Observable<Friend>{
    return this.http.get(this.address+`/friend/${id}`) as Observable<Friend>
  }
  getAdultAgeCount(age?:number):Observable<number>{
    return this.http.get(this.address+`/adult/age/${age}`) as Observable<number>;
  }
  getAdultAgePage(age?:number,page?:number):Observable<AdultDTO[]>{
    return this.http.get(this.address+`/adult/age/${age}/page/${page}`) as Observable<AdultDTO[]>;
  }

}
