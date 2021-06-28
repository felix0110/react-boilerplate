import { pick, keys } from 'lodash';
import Header from 'components/Header';
import Footer from 'components/Footer';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import PropTypes from 'prop-types';
// Sample data
/*
var data = {
    "key3":"table header" ,
    "key1":"table header2"
 }


var model = [{
    "key1": "a", "key2": "b", "key3": "c"
}, {
    "key1": "1", "key2": "2", "key3": "3"
}, {
    "key1": "f", "key2": "c", "key3": "k"
}]

 */

const mapValueWithTable = (data, model) => {
  const dataAfterFilter = filterWithModel(data, model);
  return [model, ...dataAfterFilter];
};

const filterWithModel = (data, model) => data.map(o => pick(o, keys(model)));

const RenderRoutes = ({ routes }) => (
  <Switch>
    {routes.map(route => (
      <RouteWithSubRoutes key={route.key} {...route} />
    ))}
    <Route component={NotFoundPage} />
  </Switch>
);

const RouteWithSubRoutes = route => {
  const result = route.isWithHandF ? (
    <React.Fragment>
      <Header />
      <Route
        path={route.path}
        exact={route.exact}
        render={props => <route.component {...props} routes={route.routes} />}
      />
      <Footer />
    </React.Fragment>
  ) : (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
  return result;
};

RenderRoutes.propTypes = { routes: PropTypes.array };

export { mapValueWithTable, filterWithModel, RenderRoutes };
