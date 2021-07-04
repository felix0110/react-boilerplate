import React from 'react';
import { Fade } from '@material-ui/core';

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
    marginTop: '50px',
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
  aboutMeSection: {
    width: '80vw',
    marginTop: '10vh',
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const AboutMeSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.section} id="about">
      <div className={classes.container}>
        <div className={classes.aboutMeSection}>
          <div className="content">
            <Fade in>
              <H1>About Me</H1>
            </Fade>
            <p>
              <FormattedMessage {...messages.paraOneMessage} />
              <br />
              <br />
              <FormattedMessage {...messages.paraTwoMessage} />
              <br />
              <br />
              <FormattedMessage {...messages.paraThreeMessage} />
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              alt="about"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
