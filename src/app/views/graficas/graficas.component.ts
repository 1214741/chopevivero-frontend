import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent {
  private intervalUpdate: any = null;
  public chart: any = null;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
		
	}

   /**
 * On component destroy
 * @function ngOnDestroy
 * @return {void}
 */
 private ngOnDestroy(): void {
  clearInterval(this.intervalUpdate);
 }
 
  /**
 * Print the data to the chart
 * @function showData
 * @return {void}
 */
 private showData(): void {
  this.getFromAPI().subscribe(response => {
    if(response.error === false) {
      let chartTime: any = new Date();
      chartTime = chartTime.getHours() + ':' + ((chartTime.getMinutes() < 10) ? '0' + chartTime.getMinutes() : chartTime.getMinutes()) + ':' + ((chartTime.getSeconds() < 10) ? '0' + chartTime.getSeconds() : chartTime.getSeconds());
      if(this.chart.data.labels.length > 15) {
          this.chart.data.labels.shift();
          this.chart.data.datasets[0].data.shift();
      }
      this.chart.data.labels.push(chartTime);
      this.chart.data.datasets[0].data.push(response.data);
      this.chart.update();
    } else {
      console.error("ERROR: The response had an error, retrying");
    }
  }, error => {
    console.error("ERROR: Unexpected response");
  });
  
}
 
/**
* Get the data from the API
* @function getFromAPI
* @return {Observable<any>}
*/
private getFromAPI(): Observable<any>{
  return this.http.get(
     'http://localhost:3000',
     { responseType: 'json' }
  );
}

}
