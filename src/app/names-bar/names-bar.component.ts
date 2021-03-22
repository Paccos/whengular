import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-names-bar',
  templateUrl: './names-bar.component.html',
  styleUrls: ['./names-bar.component.scss'],
})
export class NamesBarComponent implements OnInit {
  @Input() namesAndStates: { name: string; maybe: boolean }[] = [];

  constructor() {}

  ngOnInit(): void {}
}
