/**
 *
 * Signin
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSignin from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Signin() {
  useInjectReducer({ key: 'signin', reducer });
  useInjectSaga({ key: 'signin', saga });

  return (
    <div>
      <Helmet>
        <title>Signin</title>
        <meta name="description" content="Description of Signin" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Signin.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signin: makeSelectSignin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  memo,
)(Signin);
