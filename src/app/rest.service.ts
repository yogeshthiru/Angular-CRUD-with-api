import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from './users';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { UserFetch } from './user-fetch';
@Injectable({
  providedIn: 'root'
})
export class RestService {
  headers=new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
  httpOptions={
    headers: this.headers
  }
  constructor(private http:HttpClient) { }

  url:string ="http://localhost:3000/Users";
  getUsers(){
    return this.http.get<Users[]>(this.url);
  }

 
  deleteUser(id: number):Observable<Users>{
    const url=`${this.url}/${id}`;
    return this.http.delete<Users>(url,this.httpOptions);
  }

  getUpdateUser(id: number):Observable<Users>{
    const url=`${this.url}/${id}`;
    return this.http.get<Users>(url,this.httpOptions)
  }

  updateUser(user: UserFetch):Observable<Users>{
    const url=`${this.url}/${user.id}`;
    return this.http.put<Users>(url,user,this.httpOptions).pipe(
      map(()=> user)
    );
  }



  // updateUser(id, data): Observable<any> {
  //   return this.http.put(`${this.url}/${id}`, data);
  // }




}
