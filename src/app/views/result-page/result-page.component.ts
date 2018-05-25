import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  public params;
  public hari;
  public bulan;
  public fullday;
  public fulldate;
  public fullmonth;
  public fullyears;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
          this.params = params['some-data'];
      });
      const mounth = this.params.split('-')[1];
      const date = this.params.split('-')[2];
      const year = this.params.split('-')[0];
      const fulldatepick = mounth+'-'+date+'-'+year;
      const stringdate = fulldatepick.toString();
      const fulldate = new Date(stringdate);
      switch (fulldate.getDay()) {
          case 0:
              this.hari = "Sunday";
              break;
          case 1:
              this.hari = "Monday";
              break;
          case 2:
              this.hari = "Tuesday";
              break;
          case 3:
              this.hari = "Wednesday";
              break;
          case 4:
              this.hari = "Thursday";
              break;
          case 5:
              this.hari = "Friday";
              break;
          case  6:
              this.hari = "Saturday";
      }

      switch (fulldate.getMonth()) {
          case 0:
              this.bulan = "January";
              break;
          case 1:
              this.bulan = "February";
              break;
          case 2:
              this.bulan = "March";
              break;
          case 3:
              this.bulan = "April";
              break;
          case 4:
              this.bulan = "May";
              break;
          case 5:
              this.bulan = "June";
              break;
          case  6:
              this.bulan = "July";
              break;
          case  7:
              this.bulan = "August";
              break;
          case  8:
              this.bulan = "September";
              break;
          case  9:
              this.bulan = "October";
              break;
          case  10:
              this.bulan = "November";
              break;
          case  11:
              this.bulan = "December";
              break;
      }
      // console.log(this.hari , fulldate.getDate() , this.bulan  , fulldate.getFullYear());
      this.fullday = this.hari;
      this.fulldate = fulldate.getDate();
      this.fullmonth = this.bulan;
      this.fullyears = fulldate.getFullYear();

  }
}
