import { Injectable } from '@angular/core';

import { HttpClient , HttpClientModule } from '@angular/common/http';

// import { Observable } from 'rxjs';
// import{profile} from '../admin-profile/profileData';

@Injectable({
    providedIn: 'root'
  })
  export class profileData{
      constructor(private http: HttpClient){}
      getData(){
          return this.http.get("https://jsonplaceholder.typicode.com/todos/1")
      }
  }
