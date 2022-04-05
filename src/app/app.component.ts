import { Component, OnInit } from '@angular/core';
import { ViveroService } from '../app/services/vivero.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'chopevivero-frontend';
  
  constructor(private viveroService: ViveroService){
    console.log("Componente Creado")
  }

  ngOnInit(): void {
    console.log("Componente inicializado")
  }
}
