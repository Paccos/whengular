import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onDeleteClicked: () => void = () => {
    if (this.editId === this.authorId) return;

    const dialogRef = this.dialog.open(ConfirmDeleteDialog);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.deleteActionHandler(this.editId);
      }
    });
  };
}

@Component({
  selector: 'dialog-confirm-delete',
  templateUrl: 'dialog-confirm-delete-content.html',
})
export class ConfirmDeleteDialog {}
