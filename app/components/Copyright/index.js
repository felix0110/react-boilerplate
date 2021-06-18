/**
 *
 * Copyright
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        <FormattedMessage {...messages.header} />
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

Copyright.propTypes = {};

export default Copyright;
