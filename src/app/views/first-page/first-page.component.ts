import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
    public year;
    public day;
    public month;
    public objDate;
    public mSeconds;
    public ExpiryDate;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  result (val){
      this.ExpiryDate = val;
      this.checkDate();
  }

    checkDate(){
        const splitdate = this.ExpiryDate.split("T");
        const date = splitdate[0];
        if (this.isDate(this.ExpiryDate)) {
            this.router.navigate(['/result-page', date]);
        }
        else if (this.ExpiryDate == "") {
            document.getElementById('fieldnull').style.display = 'block';
            document.getElementById('fieldfalse').style.display = 'none';
        }else {
            document.getElementById('fieldfalse').style.display = 'block';
            document.getElementById('fieldnull').style.display = 'none';
        }

    }

    isDate(ExpiryDate) {
    if (ExpiryDate.length < 10) {
        return false;
    }
    if (ExpiryDate.substring(4, 5) !== '-' || ExpiryDate.substring(7, 8) !== '-') {
        return false;
    }
    this.year = ExpiryDate.substring(0, 4) - 0;
    this.month = ExpiryDate.substring(5, 7) - 1;
    this.day = ExpiryDate.substring(8, 10) - 0;
    if (this.year < 1000 || this.year > 3000) {
        return false;
    }
    this.mSeconds = (new Date(this.year, this.month, this.day)).getTime();
    this.objDate = new Date();
    this.objDate.setTime(this.mSeconds);
    if (this.objDate.getFullYear() !== this.year ||
        this.objDate.getMonth() !== this.month ||
        this.objDate.getDate() !== this.day) {
        return false;
    }
    return true;
}


}

