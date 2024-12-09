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
}

interface Env {
  data: KVNamespace;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const dates = new AcademicCalendar();
  for (const key of Object.keys(dates)) {
    dates[key] = await context.env.data.get(key);
  }
  return new Response(JSON.stringify(dates), {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
    },
  });
};
