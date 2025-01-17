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
import ROUTES from 'containers/App/route';

import GlobalStyle from '../../global-styles';
import { RenderRoutes } from '../../utils/utils';

const AppWrapper = styled.div`
  max-width: 100%
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const App = () => (
  <AppWrapper>
    <Helmet
      titleTemplate="%s - React.js Boilerplate"
      defaultTitle="Felix's Portfolio"
    >
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <RenderRoutes routes={ROUTES} />
    <GlobalStyle />
  </AppWrapper>
);

export default App;
