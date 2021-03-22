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
  }[] = [
    {
      date: new Date('2020-12-25'),
      entries: [
        { name: 'Hans', maybe: false },
        { name: 'Wurst', maybe: false },
        { name: 'Käse', maybe: false },
      ],
    },
    {
      date: new Date('2020-12-27'),
      entries: [
        { name: 'Hans', maybe: false },
        { name: 'Wurst', maybe: true },
        { name: 'Käse', maybe: false },
      ],
    },
    {
      date: new Date('2020-12-29'),
      entries: [
        { name: 'Hans', maybe: true },
        { name: 'Wurst', maybe: false },
        { name: 'Käse', maybe: false },
      ],
    },
    {
      date: new Date('2020-12-30'),
      entries: [
        { name: 'Wurst', maybe: false },
        { name: 'Käse', maybe: false },
      ],
    },
  ];

  @Input() userSelections: { date: Date; state: SelectionState }[] = [];

  @Input() userSelectionHandler: (date: Date, state: SelectionState) => void = (
    date,
    state
  ) => {
    console.log(date);
    console.log(state);
  };

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
