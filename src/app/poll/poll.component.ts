import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
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

  entries: { date: Date; entries: { name: string; maybe: boolean }[] }[] = [];
  userSelections: { date: Date; state: SelectionState }[] = [];
  participants: { id: string; name: string }[] = [];

  pollAuthor: () => string | undefined = () => {
    return this.participants.find((p) => p.id === this.authorId)?.name;
  };

  constructor(private pollService: PollService) {}

  ngOnInit(): void {
    this.pollService.getEntries().subscribe((e) => (this.entries = e));

    this.pollService
      .getParticipants()
      .subscribe((p) => (this.participants = p));
  }

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
