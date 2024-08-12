import React, { memo, useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

interface SeoProps {
  description?: string;
  title: string;
  children?: React.ReactNode;
  index?: string;
}

const seoQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`;

const Seo = memo(({ description, title, children, index }: SeoProps) => {
  const { site } = useStaticQuery(seoQuery);

  const metaDescription = useMemo(
    () => description || site.siteMetadata.description,
    [description, site.siteMetadata.description]
  );
  const defaultTitle = useMemo(() => site.siteMetadata?.title, [site.siteMetadata?.title]);

  return (
    <>
      <html lang="en" />
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta
        name="description"
        content={metaDescription}
      />
      <meta
        name="author"
        content={site.siteMetadata?.author || ``}
      />
      <meta
        name="application-name"
        content={defaultTitle}></meta>
      <meta
        property="og:title"
        content={defaultTitle ? `${title} | ${defaultTitle}` : title}
      />
      <meta
        property="og:description"
        content={metaDescription}
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:locale"
        content="en_US"
      />
      <meta
        property="og:site_name"
        content={defaultTitle}
      />
      <meta
        property="og:image"
        content={`${site.siteMetadata?.siteUrl}/dark-hero-img.png`}
      />
      <meta
        property="og:image:secure_url"
        content={`${site.siteMetadata?.siteUrl}/dark-hero-img.png`}
      />
      <meta
        property="og:url"
        content={`${site.siteMetadata?.siteUrl}`}
      />
      <meta
        property="og:image:alt"
        content={`${defaultTitle} logo`}
      />
      <meta
        name="robots"
        content={index || 'index, follow'}
      />
      {children}
    </>
  );
});

export default Seo;
