import { useStaticQuery, graphql } from 'gatsby';
import { clsx } from 'clsx';
import Header from './Header';
import { Footer } from './Footer';
import React from 'react';
import { SkipToMain } from './SkipToMain';

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
      <SkipToMain />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main
        id="main"
        className={clsx(
          'bg-light-background bg-top-gradient dark:bg-dark-background',
          'min-h-screen',
          'text-light-text dark:text-dark-text',
          'pt-24 md:pt-32 pb-12'
        )}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
