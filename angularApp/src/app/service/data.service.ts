import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) { }
  
    // Get all posts from the API
    data() {
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.get('http://localhost:8080/posts',{headers: headers})
        .map(res => res.json());
    }
}
