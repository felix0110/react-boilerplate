/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import Header from 'containers/LandingPage/Page/Header';
import AboutMeSection from 'containers/LandingPage/Page/AboutMeSection';
import SkillsSection from 'containers/LandingPage/Page/SkillsSection';

const LandingPage = () => (
  <article>
    <Header />
    <AboutMeSection />
    <SkillsSection />
  </article>
);

export default LandingPage;
