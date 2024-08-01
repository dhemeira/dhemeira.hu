import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { clsx } from 'clsx';
import { Header } from './Header';
import { useEffect, useLayoutEffect, useState } from 'react';
import { cookieValue } from '../utils';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main
        className={clsx(
          'bg-light-background',
          'min-h-screen',
          'dark:bg-dark-background',
          'text-light-text',
          'dark:text-dark-text',
          'pt-24',
          'md:pt-32',
          'pb-12',
          'bg-top-gradient'
        )}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
