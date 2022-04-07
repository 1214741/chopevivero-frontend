import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  MostrarTemperatura(){
    //console.log(1)
    this.renderer.setAttribute(this., "display", "flex");
  }
  MostrarHumedad(){
    console.log(2)
  }
  MostrarRadiacion(){
    console.log(3)
  }

  ngOnInit(): void {
  }

}
