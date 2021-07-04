import React from 'react';
import { Fade, Button } from '@material-ui/core';
import H2 from 'components/H2';
import H1 from 'components/H1';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import messages from './messages';

const useStyles = makeStyles({
  blackBtn: {
    backgroundColor: 'black',
    color: 'white',
  },
  section: {
    width: '100vw',
    height: 'auto',
    overflow: 'hidden',
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerWrapper: {
    width: '80vw',
    marginTop: '10vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textBody: {
    marginTop: '5vh',
    marginBottom: '5vh',
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.section} id="home">
      <div className={classes.container}>
        <div className={classes.headerWrapper}>
          <Fade in>
            <H2>
              <FormattedMessage {...messages.greetingMessage} />
            </H2>
          </Fade>
          <Fade in>
            <div>
              <H1>
                <FormattedMessage {...messages.lineOneMessage} />
              </H1>
              <H1>
                <FormattedMessage {...messages.lineTwoMessage} />
              </H1>
              <H1>
                <FormattedMessage {...messages.lineThreeMessage} />
              </H1>
            </div>
          </Fade>
          <Fade in>
            <p className={classes.textBody}>
              {' '}
              <FormattedMessage {...messages.bodyMessage} />
            </p>
          </Fade>
          <Fade in>
            <Button
              className={classes.blackBtn}
              variant="contained"
              href={`mailto:${'felix011018@gmail.com'}`}
            >
              CONNECT WITH ME
            </Button>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Header;
