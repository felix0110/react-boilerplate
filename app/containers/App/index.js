/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import SignInPage from 'containers/SigninPage/Loadable';
import AdminPage from 'containers/AdminPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: 100%
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>

      <Switch>
        <Route exact path="/">
          <Header />
          <HomePage />
          <Footer />
        </Route>
        <Route path="/features">
          <Header />
          <FeaturePage />
          <Footer />
        </Route>
        <Route path="/signin">
          <Header />
          <SignInPage />
          <Footer />
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>
        <Route path="">
          <Header />
          <NotFoundPage />
          <Footer />
        </Route>
      </Switch>

      <GlobalStyle />
    </AppWrapper>
  );
}
