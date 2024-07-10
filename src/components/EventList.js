import React from 'react';
import { Link } from 'react-router-dom';

const events = [
  { id: 1, name: 'Event 1', date: '2023-08-01' },
  { id: 2, name: 'Event 2', date: '2023-08-15' },
  { id: 3, name: 'Event 3', date: '2023-09-01' },
  { id: 4, name: 'Event 4', date: '2023-09-15' },
  { id: 5, name: 'Event 5', date: '2023-10-01' },
  { id: 6, name: 'Event 6', date: '2023-10-15' },
  { id: 7, name: 'Event 7', date: '2023-11-01' },
  { id: 8, name: 'Event 8', date: '2023-11-15' },
  { id: 9, name: 'Event 9', date: '2023-12-01' },
  { id: 10, name: 'Event 10', date: '2023-12-15' },
];

const EventList = () => {
  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link to={`/register/${event.id}`}>{event.name}</Link> - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
