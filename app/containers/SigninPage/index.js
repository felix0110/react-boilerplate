import React, { memo } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Form from './Form';
import Paper from './Paper';
import makeSelectSignin from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Signin() {
  useInjectReducer({ key: 'signin', reducer });
  useInjectSaga({ key: 'signin', saga });

  const useStyles = makeStyles(theme => ({
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <Helmet>
        <title>Signin</title>
        <meta name="description" content="Description of Signin" />
      </Helmet>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            <FormattedMessage {...messages.signin} />
          </Typography>
          <Form noValidate>
            <FormattedMessage {...messages.email}>
              {email => (
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label={email}
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
              )}
            </FormattedMessage>
            <FormattedMessage {...messages.password}>
              {password => (
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label={password}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              )}
            </FormattedMessage>
            <FormattedMessage {...messages.rememberme}>
              {rememberme => (
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label={rememberme}
                />
              )}
            </FormattedMessage>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              <FormattedMessage {...messages.signin} />
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/features" variant="body2">
                  <FormattedMessage {...messages.forgotpassword} />
                </Link>
              </Grid>
              <Grid item>
                <Link to="/" variant="body2">
                  <FormattedMessage {...messages.tosignup} />
                </Link>
              </Grid>
            </Grid>
          </Form>
        </Paper>
      </Container>
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

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Signin);
