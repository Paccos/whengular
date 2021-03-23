import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.scss'],
})
export class ParticipantListComponent implements OnInit {
  @Input() participants: { id: string; name: string }[] = [];
  @Input() deleteActionHandler: (id: string) => void = (_) => {};
  @Input() editActionHandler: (id: string) => void = (_) => {};

  @Input() editId: string = '';
  @Input() authorId: string = '';

  constructor() {}

  ngOnInit(): void {}

  onDeleteClicked: () => void = () => {
    this.deleteActionHandler(this.editId);
  };
}
