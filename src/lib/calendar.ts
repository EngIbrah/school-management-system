import { Event } from 'react-big-calendar';

/**
 * Get Monday of the current week
 * (If today is Sat/Sun → get next Monday)
 */
const getWeekMonday = (): Date => {
  const today = new Date();
  const day = today.getDay(); // 0 = Sun, 1 = Mon

  const diff =
    day === 0
      ? 1
      : day === 6
      ? 2
      : 1 - day;

  const monday = new Date(today);
  monday.setDate(today.getDate() + diff);
  monday.setHours(0, 0, 0, 0);

  return monday;
};

/**
 * Create date for weekday (0 = Monday → 4 = Friday)
 */
const getWeekDateTime = (
  weekDay: number,
  hour: number,
  minute = 0
): Date => {
  const monday = getWeekMonday();
  const date = new Date(monday);
  date.setDate(monday.getDate() + weekDay);
  date.setHours(hour, minute, 0, 0);
  return date;
};

export const calendarEvents: Event[] = [
  // ===== MONDAY =====
  { title: 'Mathematics', start: getWeekDateTime(0, 8), end: getWeekDateTime(0, 8, 45) },
  { title: 'English', start: getWeekDateTime(0, 9), end: getWeekDateTime(0, 9, 45) },
  { title: 'Kiswahili', start: getWeekDateTime(0, 10), end: getWeekDateTime(0, 10, 45) },
  { title: 'Biology', start: getWeekDateTime(0, 11), end: getWeekDateTime(0, 11, 45) },
  { title: 'Civics', start: getWeekDateTime(0, 14), end: getWeekDateTime(0, 14, 45) },

  // ===== TUESDAY =====
  { title: 'Physics', start: getWeekDateTime(1, 8), end: getWeekDateTime(1, 8, 45) },
  { title: 'Chemistry', start: getWeekDateTime(1, 9), end: getWeekDateTime(1, 9, 45) },
  { title: 'Mathematics', start: getWeekDateTime(1, 10), end: getWeekDateTime(1, 10, 45) },
  { title: 'Geography', start: getWeekDateTime(1, 11), end: getWeekDateTime(1, 11, 45) },
  { title: 'English', start: getWeekDateTime(1, 14), end: getWeekDateTime(1, 14, 45) },

  // ===== WEDNESDAY =====
  { title: 'Kiswahili', start: getWeekDateTime(2, 8), end: getWeekDateTime(2, 8, 45) },
  { title: 'Biology', start: getWeekDateTime(2, 9), end: getWeekDateTime(2, 9, 45) },
  { title: 'History', start: getWeekDateTime(2, 10), end: getWeekDateTime(2, 10, 45) },
  { title: 'Physics', start: getWeekDateTime(2, 11), end: getWeekDateTime(2, 11, 45) },
  { title: 'Civics', start: getWeekDateTime(2, 14), end: getWeekDateTime(2, 14, 45) },

  // ===== THURSDAY =====
  { title: 'Chemistry', start: getWeekDateTime(3, 8), end: getWeekDateTime(3, 8, 45) },
  { title: 'Mathematics', start: getWeekDateTime(3, 9), end: getWeekDateTime(3, 9, 45) },
  { title: 'Geography', start: getWeekDateTime(3, 10), end: getWeekDateTime(3, 10, 45) },
  { title: 'English', start: getWeekDateTime(3, 11), end: getWeekDateTime(3, 11, 45) },
  { title: 'Biology', start: getWeekDateTime(3, 14), end: getWeekDateTime(3, 14, 45) },

  // ===== FRIDAY =====
  { title: 'History', start: getWeekDateTime(4, 8), end: getWeekDateTime(4, 8, 45) },
  { title: 'Kiswahili', start: getWeekDateTime(4, 9), end: getWeekDateTime(4, 9, 45) },
  { title: 'Physics', start: getWeekDateTime(4, 10), end: getWeekDateTime(4, 10, 45) },
  { title: 'Chemistry', start: getWeekDateTime(4, 11), end: getWeekDateTime(4, 11, 45) },
  { title: 'Civics', start: getWeekDateTime(4, 14), end: getWeekDateTime(4, 14, 45) },
];
