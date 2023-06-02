import { Injectable } from "@angular/core";
import { User, UserProfile, UserProfileUpdate, UserAdminPage } from "src/app/common/user.model";
import { SQLResponse } from "src/app/common/user.model";

import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { observableToBeFn } from "rxjs/internal/testing/TestScheduler";
const USER_KEY = 'auth-user';
      const user = window.sessionStorage.getItem(USER_KEY);
      const parsedUser = user ? JSON.parse(user) : null;
      const jwtToken = parsedUser ? parsedUser.jwtToken : null; 
      const headers=new HttpHeaders().set('Authorization',jwtToken)
@Injectable()
export class UserService {

    //private baseUrl = "http://localhost:8080/api/";
    private baseUrl = "https://mpporiginal.mooo.com/api/";

    constructor(private httpClient: HttpClient) { }

    getUserByUsername(username: string): Observable<User> {
      return this.httpClient.get(this.baseUrl + "user/" + username) as Observable<User>;
    }

    getUserProfileById(userId: string): Observable<UserProfile> {
      return this.httpClient.get(this.baseUrl + "user-profile-id/" + userId) as Observable<UserProfile>;
    }
    
    getUserProfileByUsername(username: string): Observable<UserProfile> {
      return this.httpClient.get(this.baseUrl + "user-profile-username/" + username) as Observable<UserProfile>;
    } 

    getUsersByName(username: string): Observable<UserAdminPage[]> {
      return this.httpClient.get(this.baseUrl + "user-search?username=" + username) as Observable<UserAdminPage[]>;
    }

    getNumberOfAdults(id: string): Observable<Number> {
      return this.httpClient.get(this.baseUrl + "user-number-adults/" + id) as Observable<Number>;
    }

    getNumberOfChildren(id: string): Observable<Number> {
      return this.httpClient.get(this.baseUrl + "user-number-children/" + id) as Observable<Number>;
    }  

    getNumberOfFamilies(id: string): Observable<Number> {
      return this.httpClient.get(this.baseUrl + "user-number-families/" + id) as Observable<Number>;
    }
    getNumberOfFriends(id: string): Observable<Number> {
      return this.httpClient.get(this.baseUrl + "user-number-friends/" + id) as Observable<Number>;
    }
    updateUserProfile(user: UserProfileUpdate, id: number) {
      console.log(id)

      return this.httpClient.put(this.baseUrl + "user-profile/" + id, user)
    }

    updateUserRoles(id: string, roles: any) {

      return this.httpClient.put(this.baseUrl + "user-roles/" + id, roles,{headers})
      
    }

    changeEntitiesPerPage(entitiesPerPage: number): Observable<number> {
      return this.httpClient.post(this.baseUrl + `modify-entities-per-page/${entitiesPerPage}`,null) as Observable<number>;
    }

    getEntitiesPerPage(): Observable<number> {
      return this.httpClient.get(this.baseUrl + "get-entities-per-page") as Observable<number>;
    }
    getBio(): Observable<string>{
      return this.httpClient.get(this.baseUrl+"user/gpt") as Observable<string>;
    }

}