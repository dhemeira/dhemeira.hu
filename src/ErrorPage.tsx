import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';

interface ErrorPageProps {
  err?: string;
  statusCode?: number;
}

export const ErrorPage = ({ err, statusCode }: ErrorPageProps) => {
  const error = useRouteError() ?? err;
  let errorMessage: string;
  let errorTitle: number;

  errorTitle = 500;
  if (isRouteErrorResponse(error)) {
    errorMessage = error.data.message || error.statusText;
    errorTitle = error.status;
  } else if (typeof error === 'string') {
    errorMessage = error;
    errorTitle = statusCode ?? 500;
  } else {
    console.error(error);
    errorMessage = 'Ismeretlen hiba';
  }
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-screen">
      <h1 className="text-4xl font-bold">{errorTitle}</h1>
      <p>{errorMessage}</p>
      <Link to={`/`}>Back to home</Link>
    </div>
  );
};
