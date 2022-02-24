import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url='https://api.tiktak.space/api/v1/users/';
  private urlLoging='https://api.tiktak.space/api/v1/login/' ; 

  constructor(private http:HttpClient) { }

  ajoutUser(user: any){
    return this.http.post(this.url,user, {headers: new HttpHeaders().set('Authorization', 'Token aa6c38cf8b60a34a29a89043a92682bb6e8bb58daa6c38cf8b60a34a29a89043a92682bb6e8bb58d')}) ;
  }

  retourtUser(user: any){
    return this.http.get(this.url) ;
  }

  loginUser(user: any){
    return this.http.post<any>(this.urlLoging,user)


  }
}
