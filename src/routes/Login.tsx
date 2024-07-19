import { useSearchParams } from 'react-router-dom';
export const Login = () => {
  const [searchParams] = useSearchParams();

  return (
    <article>
      <h2>Please enter your username and password for this site.</h2>
      {searchParams.get('error') ? (
        <p className="error">Incorrect username or password, please try again.</p>
      ) : (
        ''
      )}
      <form
        method="post"
        action="/api/login">
        <input
          type="text"
          name="username"
          placeholder="Username"
          aria-label="Username"
          required
          autoFocus
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          aria-label="Password"
          autoComplete="current-password"
          required
        />
        <button
          type="submit"
          className="contrast">
          Login
        </button>
      </form>
    </article>
  );
};
