import { Component, Input, OnInit } from '@angular/core';
import { SelectionState } from '../selection-state.enum';

@Component({
  selector: 'app-date-grid',
  templateUrl: './date-grid.component.html',
  styleUrls: ['./date-grid.component.scss'],
})
export class DateGridComponent implements OnInit {
  @Input() entries: {
    date: Date;
    entries: { name: string; maybe: boolean }[];
  }[] = [];

  @Input() userSelections: { date: Date; state: SelectionState }[] = [];

  @Input() userSelectionHandler: (date: Date, state: SelectionState) => void = (
    date,
    state
  ) => {};

  constructor() {}

  ngOnInit(): void {}

  buttonState(date: Date): SelectionState {
    return (
      this.userSelections.find(
        (selection) => selection.date.getTime() === date.getTime()
      )?.state ?? SelectionState.No
    );
  }
}
