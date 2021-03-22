import { Component, Input, OnInit } from '@angular/core';
import { SelectionState } from '../selection-state.enum';

@Component({
  selector: 'app-date-column',
  templateUrl: './date-column.component.html',
  styleUrls: ['./date-column.component.scss'],
})
export class DateColumnComponent implements OnInit {
  @Input() dateToDisplay: Date = new Date();
  @Input() namesAndStates: { name: string; maybe: boolean }[] = [];
  @Input() buttonState: SelectionState = SelectionState.No;
  @Input() stateChangeHandler: (date: Date, state: SelectionState) => void = (
    _
  ) => {};

  yesCount(): number {
    return this.namesAndStates.filter((nAndS) => !nAndS.maybe).length;
  }
  maybeCount(): number {
    return this.namesAndStates.filter((nAndS) => nAndS.maybe).length;
  }

  constructor() {}

  ngOnInit(): void {}

  onButtonChange: (state: SelectionState) => void = (state) => {
    console.log('ON BUTTON CHANGE');
    this.stateChangeHandler(this.dateToDisplay, state);
  };
}
