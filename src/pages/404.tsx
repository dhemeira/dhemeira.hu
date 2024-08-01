import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <div className="flex flex-col gap-8 justify-center items-center h-screen">
      <h1 className="text-4xl font-bold">404</h1>
      <p>Page Not Found</p>
      <Link to="/">Back to home</Link>
    </div>
  </Layout>
);

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;
