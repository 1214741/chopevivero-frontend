import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ViveroService {
  constructor(private http: HttpClient) {
    console.log('Servicio Http');
  }

  getTemperatura(): any {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getHumedad(): any {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getRadiacion(): any {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
