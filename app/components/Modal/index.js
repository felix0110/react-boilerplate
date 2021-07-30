/**
 *
 * Modals
 *
 */

import React from 'react';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/Grid'
import PropTypes from 'prop-types';
import Title from '../Title';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "12px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  Title: {
    marginBottom: "0px"
  },
  Grid: {
    width: "80vw",
    marginBottom: "5vh"
  }
}));

const Info = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <React.Fragment>
        <Grid xs={12} className={classes.Grid}>
          <h1 className={classes.Title}>Title</h1>
          <Typography variant="caption" color="textSecondary" component="p">
            September 14, 2016 to September 14, 2016
          </Typography>
        </Grid>

        <Grid xs={12} className={classes.Grid}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          pharetra mauris eu fermentum sodales. Sed nibh ipsum, facilisis ut
          fermentum ut, mattis et lorem. Etiam erat leo, finibus vel augue
          tincidunt, porttitor tempus erat. Donec quam ligula, lacinia a luctus
          vitae, aliquet nec orci. Maecenas quis dapibus ipsum, quis rhoncus
          nisi. Vivamus efficitur nunc sed sem ultricies cursus. Mauris
          tincidunt, neque id tincidunt tristique, lorem tortor lobortis dui,
          nec tristique nisl tortor in diam. Curabitur pulvinar suscipit mauris
          et lobortis. Phasellus accumsan lorem consequat dignissim porta.
          Vivamus viverra justo leo, eget sollicitudin mauris fringilla et.
        </Grid>
        <Grid xs={12} className={classes.Grid}></Grid>
        <Grid xs={12} className={classes.Grid}>
          <h2>Skillsets</h2>
        </Grid>
      </React.Fragment>
    </div>)
}


const Modals = props => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>User</Title>
      <Info />

    </React.Fragment>
  );
};

Modals.propTypes = { data: PropTypes.object };

export default Modals;
