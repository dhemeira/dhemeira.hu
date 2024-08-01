export enum TypeOfWeek {
  Break,
  StudyPeriod,
  ExamPeriod,
}
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

  private static getCurrentWeek = (curr: string, start: string) => {
    const currDate = new Date(curr);
    const startDate = new Date(start);
    const diff = currDate.getTime() - startDate.getTime();
    const week = Math.floor(diff / (1000 * 60 * 60 * 24 * 7)) + 1;

    return `Week ${week}`;
  };

  static typeOfWeek = (date: string, calendar: AcademicCalendar) => {
    if (date < calendar.semester_start_date || date > calendar.exam_end_date)
      return TypeOfWeek.Break;
    return date <= calendar.semester_end_date ? TypeOfWeek.StudyPeriod : TypeOfWeek.ExamPeriod;
  };

  static weekType = (type: TypeOfWeek) => {
    if (type === TypeOfWeek.StudyPeriod) return 'of study period';
    if (type === TypeOfWeek.ExamPeriod) return 'of exam period';
    return '';
  };

  static weekTitle = (date: string, calendar: AcademicCalendar, type: TypeOfWeek) => {
    if (type === TypeOfWeek.StudyPeriod)
      return AcademicCalendar.getCurrentWeek(date, calendar.semester_start_date);
    if (type === TypeOfWeek.ExamPeriod)
      return AcademicCalendar.getCurrentWeek(date, calendar.exam_start_date);
    return 'Break';
  };

  static weekEmoji = (type: TypeOfWeek) => {
    if (type === TypeOfWeek.StudyPeriod) return '📖';
    if (type === TypeOfWeek.ExamPeriod) return '📝';
    return '🏖️';
  };
}
