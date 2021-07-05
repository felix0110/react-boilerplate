import React from 'react';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Card from 'components/GalleryCard'
import data from './data'
import H1 from 'components/H1'

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
  workContainer: {
    width: '80vw',
    marginTop: '10vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }, grid: {
    display: "grid",
    marginTop: "20px",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "10px"
  }
});


const WorkSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.section} id="work">
      <div className={classes.container}>
        <div className={classes.workContainer}>
          <Fade in>
            <h1>Work</h1>
          </Fade>

          <div className={classes.grid}>
            <Fade in={true}>
              {data.map(project => (
                <Card
                  key={project.id}
                  title={project.title}
                  para={project.para}
                  img={project.img}
                />
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
};

export default WorkSection;
