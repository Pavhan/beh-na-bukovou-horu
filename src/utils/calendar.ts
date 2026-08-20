import { EVENT_DETAILS } from '../data/eventData';

export function downloadCalendarEvent() {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Beh na Bukovou horu//CZ',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:beh-na-bukovou-horu-2026@vyprachtice.cz',
    'DTSTAMP:20260817T090000Z',
    'DTSTART:20260829T090000',
    'DTEND:20260829T150000',
    `SUMMARY:${EVENT_DETAILS.edition} ${EVENT_DETAILS.name}`,
    `DESCRIPTION:Tradiční závod v běhu do vrchu na trati dlouhé 7 km s převýšením +373 m z Výprachtic na Bukovou horu. Dětské závody od 9:30, hlavní závod v 11:00. Více na https://beh-na-bukovou-horu.webnode.cz/`,
    `LOCATION:${EVENT_DETAILS.locationName}, ${EVENT_DETAILS.address}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'beh-na-bukovou-horu-2026.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
