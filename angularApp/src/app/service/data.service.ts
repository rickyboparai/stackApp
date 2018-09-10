import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

// class
export class DataService {

  constructor(private http: Http) { }
  
 
    //method to get data from API
    data() {
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.get('/posts',{headers: headers})
        .map(res => res.json());
    }
}