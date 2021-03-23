import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameCircleComponent } from './name-circle/name-circle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DateViewComponent } from './date-view/date-view.component';
import { NamesBarComponent } from './names-bar/names-bar.component';
import { YesMaybeCounterComponent } from './yes-maybe-counter/yes-maybe-counter.component';
import { DateColumnComponent } from './date-column/date-column.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { DateGridComponent } from './date-grid/date-grid.component';
import {
  ConfirmDeleteDialog,
  ParticipantListComponent,
} from './participant-list/participant-list.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { PollComponent } from './poll/poll.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NameCircleComponent,
    DateViewComponent,
    NamesBarComponent,
    YesMaybeCounterComponent,
    DateColumnComponent,
    ToggleButtonComponent,
    DateGridComponent,
    ParticipantListComponent,
    SubmitButtonComponent,
    PollComponent,
    ConfirmDeleteDialog,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    FormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
