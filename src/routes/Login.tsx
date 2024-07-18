import { useSearchParams } from 'react-router-dom';
export const Login = () => {
  const [searchParams] = useSearchParams();
  return (
    <article>
      <hgroup>
        <h2>Please enter your password for this site.</h2>
      </hgroup>
      {searchParams.get('error') ? (
        <p className="error">Incorrect password, please try again.</p>
      ) : (
        ''
      )}
      <form
        method="post"
        action="/api/login">
        <input
          type="password"
          name="password"
          placeholder="Password"
          aria-label="Password"
          autoComplete="current-password"
          required
          autoFocus
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
