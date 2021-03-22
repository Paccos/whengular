import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss'],
})
export class SubmitButtonComponent implements OnInit {
  @Input() submitHandler: () => void = () => {};
  @Input() color?: string;
  @Input() id?: string;
  @Input() img?: string;
  @Input() alt?: string;
  @Input() disabled?: boolean;
  @Input() tooltip?: string;

  constructor() {}

  ngOnInit(): void {}
}
