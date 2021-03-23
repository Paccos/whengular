import { Component, OnInit } from '@angular/core';
import { SelectionState } from '../selection-state.enum';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss'],
})
export class PollComponent implements OnInit {
  pollId: string = '';
  pollTitle: string = 'Wurstbrot';

  authorId: string = '1234';
  idToEdit: string = '';

  username: string = '';

  entries = [
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

  userSelections: { date: Date; state: SelectionState }[] = [];

  participants: { id: string; name: string }[] = [
    { id: '1234', name: 'Hans' },
    { id: '4334', name: 'Wurst' },
    { id: '5656', name: 'Kaese' },
  ];

  pollAuthor: () => string | undefined = () => {
    return this.participants.find((p) => p.id === this.authorId)?.name;
  };

  constructor() {}

  ngOnInit(): void {}

  onUserSelectionChange: (date: Date, state: SelectionState) => void = (
    date,
    state
  ) => {
    let selections = this.userSelections.slice();
    const index = selections.findIndex(
      (s) => s.date.getTime() === date.getTime()
    );

    if (index !== -1) {
      selections[index].state = state;
      this.userSelections = selections.slice();
    }
  };

  onSubmitAction: () => void = () => {};

  onEditAction: (id: string) => void = (id) => {
    window.scrollTo(0, 0);
    this.idToEdit = id;

    if (!id || id.trim() === '') {
      this.username = '';
    } else {
      const participant = this.participants.find((p) => p.id === id);

      if (participant) this.username = participant.name;
    }
  };

  onDeleteAction: (id: string) => void = (id) => {
    // 1. Request to service to delete a user

    this.onAbortEdit(); // 2. leave edit mode after deleting

    // 3. fetch new poll data
  };

  onAbortEdit: () => void = () => {
    this.onEditAction('');
  };
}
