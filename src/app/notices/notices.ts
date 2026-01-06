import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Notice {
  id: number;
  title: string;
  description: string;
  date: string;
  type: 'Event' | 'Notice' | 'Holiday';
}

@Component({
  selector: 'app-notices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notices.html',
  styleUrl: './notices.scss',
})
export class Notices {
  notices: Notice[] = [
    {
      id: 1,
      title: 'Annual Sports Day',
      description: 'Annual Sports Day will be held on 15th March. All students are encouraged to participate.',
      date: '2025-03-15',
      type: 'Event',
    },
    {
      id: 2,
      title: 'Parent-Teacher Meeting',
      description: 'Scheduled for 20th March from 10 AM to 2 PM. All parents are requested to attend.',
      date: '2025-03-20',
      type: 'Notice',
    },
    {
      id: 3,
      title: 'Holi Holiday',
      description: 'School will remain closed on 25th March on account of Holi festival.',
      date: '2025-03-25',
      type: 'Holiday',
    },
    {
      id: 4,
      title: 'Science Exhibition',
      description: 'Inter-school Science Exhibition on 5th April. Students can register by 28th March.',
      date: '2025-04-05',
      type: 'Event',
    },
    {
      id: 5,
      title: 'Fee Payment Reminder',
      description: 'Last date for fee payment is 30th March. Please submit fees to avoid late charges.',
      date: '2025-03-30',
      type: 'Notice',
    },
    {
      id: 6,
      title: 'Summer Vacation',
      description: 'Summer vacation begins from 1st May. School will reopen on 1st July.',
      date: '2025-05-01',
      type: 'Holiday',
    },
  ];

  getTypeClass(type: string): string {
    switch (type) {
      case 'Event':
        return 'badge bg-primary';
      case 'Notice':
        return 'badge bg-info';
      case 'Holiday':
        return 'badge bg-warning text-dark';
      default:
        return 'badge bg-secondary';
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}

