import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  private entries: {
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

  private participants: { id: string; name: string }[] = [
    { id: '1234', name: 'Hans' },
    { id: '4321', name: 'Wurst' },
    { id: '4711', name: 'Käse' },
  ];

  constructor() {}

  // TODO: Wire up the service with the actual backend
  // TODO: Decide whether the service is just for data fetching/posting or should also transform the data for the poll component (unlikely)

  getEntries: () => Observable<
    {
      date: Date;
      entries: { name: string; maybe: boolean }[];
    }[]
  > = () => {
    return of(this.entries);
  };

  getParticipants: () => Observable<{ id: string; name: string }[]> = () => {
    return of(this.participants);
  };
}
