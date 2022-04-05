import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViveroService {

  constructor(private http: HttpClientModule) {
    console.log("Servicio Http")
   }
}
