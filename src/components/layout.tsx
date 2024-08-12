import { useStaticQuery, graphql } from 'gatsby';
import { clsx } from 'clsx';
import { Header } from './Header';
import { Footer } from './Footer';
import React, { memo } from 'react';
import { SkipToMain } from './SkipToMain';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = memo(({ children }: LayoutProps) => {
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
    <div className="min-h-screen flex flex-col bg-light-background dark:bg-dark-background bg-top-gradient">
      <SkipToMain />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main
        id="main"
        className={clsx('text-light-text dark:text-dark-text', 'pt-24 md:pt-32 pb-12 flex-1')}>
        {children}
      </main>
      <Footer />
    </div>
  );
});

export default Layout;
