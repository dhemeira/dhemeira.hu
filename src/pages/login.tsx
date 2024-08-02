import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import PrimaryButton from '../components/PrimaryButton';

const Login = () => {
  let searchParams;
  if (typeof window !== 'undefined') searchParams = new URLSearchParams(window.location.search);
  return (
    <Layout>
      <article>
        <h2>Please enter your username and password for this site.</h2>
        {searchParams?.get('error') ? (
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
          <PrimaryButton
            as="button"
            type="submit">
            Login
          </PrimaryButton>
        </form>
      </article>
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Login"
    index="noindex, nofollow"
  />
);

export default Login;
