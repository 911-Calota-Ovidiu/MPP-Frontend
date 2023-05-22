import { Injectable } from '@angular/core';


import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { SQLResponse } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class SqlService {

    // private baseUrl = "http://localhost:8080/api/admin";
    private baseUrl = "https://mpporiginal.mooo.com/api";

    constructor(private httpClient: HttpClient) { }

    insertAllAdults(): Observable<SQLResponse> {
        return this.httpClient.post(this.baseUrl + "/admin/add/adults", {}) as Observable<SQLResponse>;
      }

    deleteAllAdults(): Observable<SQLResponse> {
      return this.httpClient.post(this.baseUrl + "/admin/delete/adults", {}) as Observable<SQLResponse>;
    }

    insertAllChildren(): Observable<SQLResponse> {
        return this.httpClient.post(this.baseUrl + "/admin/add/children", {}) as Observable<SQLResponse>;
    }
  
    deleteAllChildren(): Observable<SQLResponse> {
      return this.httpClient.post(this.baseUrl + "/admin/delete/children", {}) as Observable<SQLResponse>;
    }
  
    insertAllFamilies(): Observable<SQLResponse> {
        return this.httpClient.post(this.baseUrl + "/admin/add/families", {}) as Observable<SQLResponse>;
    }

    deleteAllFamilies(): Observable<SQLResponse> {
      return this.httpClient.post(this.baseUrl + "/admin/delete/families", {}) as Observable<SQLResponse>;
    }
      
    insertAllFriends(): Observable<SQLResponse> {
        return this.httpClient.post(this.baseUrl + "/admin/add/friends", {}) as Observable<SQLResponse>;
      }

    deleteAllFriends(): Observable<SQLResponse> {
      return this.httpClient.post(this.baseUrl + "/admin/delete/friends", {}) as Observable<SQLResponse>;
    }

}