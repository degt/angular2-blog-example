import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

    endpoint = "https://jsonplaceholder.typicode.com/posts";


  constructor(private http: Http) { }

  getAll() {
      return this.http.get(this.endpoint)
          .map(response => response.json());
  }


  getPost(id) {
      return this.http.get(this.endpoint + '/' +  id)
          .map(response => response.json());
  }
}
