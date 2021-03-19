import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-circle',
  templateUrl: './name-circle.component.html',
  styleUrls: ['./name-circle.component.scss']
})
export class NameCircleComponent implements OnInit {

  @Input() name: string = "";
  @Input() maybe: boolean = false;
  @Input() stacked: boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  initials(): string {
    return this.name
      .split(' ')
		  .map((n) => n[0])
		  .join('');
  }

}
