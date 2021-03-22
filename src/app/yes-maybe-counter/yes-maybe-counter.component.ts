import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-yes-maybe-counter',
  templateUrl: './yes-maybe-counter.component.html',
  styleUrls: ['./yes-maybe-counter.component.scss'],
})
export class YesMaybeCounterComponent implements OnInit {
  @Input() yesMaybeCount: { yes: number; maybe: number } = { yes: 0, maybe: 0 };

  constructor() {}

  ngOnInit(): void {}
}
