export class AcademicCalendar {
  semester_start_date: string;
  semester_end_date: string;
  exam_start_date: string;
  exam_end_date: string;

  constructor() {
    this.semester_start_date = '';
    this.semester_end_date = '';
    this.exam_start_date = '';
    this.exam_end_date = '';
  }

  static getCurrentWeek = (curr: string, start: string) => {
    const currDate = new Date(curr);
    const startDate = new Date(start);
    const diff = currDate.getTime() - startDate.getTime();
    const week = Math.floor(diff / (1000 * 60 * 60 * 24 * 7)) + 1;

    return `Week ${week}`;
  };

  static typeOfWeek = (date: string, calendar: AcademicCalendar) => {
    if (date < calendar.semester_start_date || date > calendar.exam_end_date) return '';
    return date <= calendar.semester_end_date ? 'of study period' : 'of exam period';
  };

  static currentWeekStatus = (date: string, calendar: AcademicCalendar) => {
    if (date < calendar.semester_start_date || date > calendar.exam_end_date) return 'Break';

    if (date <= calendar.semester_end_date)
      return AcademicCalendar.getCurrentWeek(date, calendar.semester_start_date);

    return AcademicCalendar.getCurrentWeek(date, calendar.exam_start_date);
  };
}
