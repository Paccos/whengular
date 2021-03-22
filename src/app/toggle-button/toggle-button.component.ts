import { Component, Input, OnInit } from '@angular/core';
import { SelectionState } from '../selection-state.enum';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
})
export class ToggleButtonComponent implements OnInit {
  @Input() buttonState: SelectionState = SelectionState.No;
  @Input() buttonChangeHandler: (state: SelectionState) => void = (_) => {};

  buttonClass = `${SelectionState[this.buttonState].toLowerCase()}`;

  constructor() {}

  ngOnInit(): void {}

  onButtonClick(): void {
    console.log(this.buttonState);

    if (this.buttonState === SelectionState.Yes)
      this.buttonChangeHandler(SelectionState.Maybe);
    else if (this.buttonState === SelectionState.Maybe)
      this.buttonChangeHandler(SelectionState.No);
    else if (this.buttonState === SelectionState.No)
      this.buttonChangeHandler(SelectionState.Yes);
  }
}
