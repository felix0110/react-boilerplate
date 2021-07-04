import React from 'react';
import H1 from 'components/H1';
import { makeStyles } from '@material-ui/core/styles';
import data from './data';

const useStyles = makeStyles({
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
  skillsContainer: {
    width: '80vw',
    marginTop: '10vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  skillsgrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    marginTop: '50px',
    gridGap: '20px',
  },
  skill: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  img: {
    height: '3rem',
  },
});

const SkillsSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.skillsContainer}>
          <H1>Skills</H1>
          <div className={classes.skillsgrid}>
            {data.map(skill => (
              <div className={classes.skill} key={skill.id}>
                <img className={classes.img} src={skill.img} alt="css" />
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
