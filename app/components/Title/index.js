/**
 *
 * Title
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

// import styled from 'styled-components';
const Title = props => (
  <Typography component="h2" variant="h6" color="primary" gutterBottom>
    {props.children}
  </Typography>
);

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
