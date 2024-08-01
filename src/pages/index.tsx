import { ScrollAnim } from '../components/ScrollAnim';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import './Home.css';

const IndexPage = () => (
  <Layout>
    <div className="container flex flex-col gap-8 md:gap-16">
      <div className="row content-between gap-y-14">
        <div className="hidden lg:block lg:col-1"></div>
        <div className="col-12 md:col-8 lg:col-6 xl:col-5 flex flex-col items-start justify-center gap-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">
            dhemeira
            <div>
              <span className="bg-gradient-to-br from-dark-secondary dark:from-dark-primary dark:to-dark-accent to-light-accent text-transparent bg-clip-text inline-block">
                front-end
              </span>{' '}
              developer
            </div>
          </h1>
          <div className="flex flex-col gap-4">
            <div>
              <p>
                CS student & front-end developer from Hungary. Passionate about software
                development, UI design, and all things tech. I love creating smooth, user-friendly
                websites and bringing innovative ideas to life.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden xl:block xl:col-1"></div>
        <div className="hidden md:flex col-4 items-center justify-center">
          <div className="hero-img aspect-square w-full rounded-2xl"></div>
        </div>
        <div className="hidden lg:block lg:col-1"></div>
        <div className="col flex flex-col items-center gap-1">
          <ScrollAnim />
          <span className="text-sm">Scroll for more</span>
        </div>
      </div>

      <div className="row">
        <div className="col">Work In Progress</div>
      </div>
    </div>
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
