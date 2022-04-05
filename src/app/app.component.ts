import { Component, OnInit } from '@angular/core';
import { ViveroService } from '../app/services/vivero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'chopevivero-frontend';
  temperatura: any = [];
  humedad: any = [];
  radiacion: any = [];

  constructor(private viveroService: ViveroService) {
    console.log('Componente Creado');
  }

  ngOnInit(): void {
    console.log('Componente inicializado');
    this.viveroService
      .getTemperatura()
      .subscribe((response: any) => this.temperatura = response);
    this.viveroService
      .getHumedad()
      .subscribe((response: any) => this.humedad = response);
    this.viveroService
      .getRadiacion()
      .subscribe((response: any) => this.radiacion = response);
  }
}
