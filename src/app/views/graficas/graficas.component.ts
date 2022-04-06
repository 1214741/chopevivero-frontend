import { Component } from '@angular/core';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css'],
})
export class GraficasComponent {
  public datos: Array<any> = [
    { data: [45, 87, 32, 65, 78, 74], label: 'temperatura' },
    { data: [44, 85, 74, 96, 85, 74], label: 'humedad' },
    { data: [36, 85, 21, 14, 14, 25], label: 'radiacion' },
  ];

  public lineaDatos: Array<any> = [
    'Madrugada',
    'Mañana',
    'Mediodia',
    'Tardecita',
    'TardeNoche',
    'Noche',
  ];

  public lineaChartOptions: any = {
    responsive: true,
  };

  public legend: boolean = true;
  public type: string = 'line';


}
