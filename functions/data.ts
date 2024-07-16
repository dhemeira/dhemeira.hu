interface Env {
  data: KVNamespace;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const value = await context.env.data.get('semester_start_date');
  return new Response(value);
};
