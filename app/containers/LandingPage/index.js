import React from 'react';
import Header from 'containers/LandingPage/Page/Header';
import AboutMeSection from 'containers/LandingPage/Page/AboutMeSection';
import SkillsSection from 'containers/LandingPage/Page/SkillsSection';
import WorkSection from 'containers/LandingPage/Page/WorkSection'

const LandingPage = () => (
  <article>
    <Header />
    <AboutMeSection />
    <WorkSection />
    <SkillsSection />
  </article>
);

export default LandingPage;
