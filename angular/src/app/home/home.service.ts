import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {
    console.log('HomeService constructor');
  }

  getCities() {
    return lastValueFrom(this.http.get('http://localhost:3000/api/cities'));
  }
}
