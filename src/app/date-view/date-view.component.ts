import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-view',
  templateUrl: './date-view.component.html',
  styleUrls: ['./date-view.component.scss'],
})
export class DateViewComponent implements OnInit {
  @Input() dateToDisplay: Date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
