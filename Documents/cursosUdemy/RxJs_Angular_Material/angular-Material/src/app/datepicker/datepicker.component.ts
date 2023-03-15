import { Platform } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
public startDate = new Date(2023,2,10);
public minDate = new Date(2023,2,10);
public maxDate = new Date(2023,4,15);


  constructor(private platform: Platform) { }

  ngOnInit(): void {
  }

  get isTouchDevice(){
    return this.platform.ANDROID || this.platform.IOS;
  }

}
