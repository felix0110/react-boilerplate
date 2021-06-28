import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import _ from 'lodash';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Tables from 'components/Tables';

import { loadUsers } from 'containers/AdminPage/actions';
import { makeStyles } from '@material-ui/core/styles';
import makeSelectAdminPage from '../selectors';

const tableheader = ['email', 'First Name', 'id', 'Last Name', 'username'];

const drawerWidth = 250;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px - 15px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));
const UserTable = ({ users, getAllUsers }) => {
  const classes = useStyles();
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper className={classes.paper}>{createTable(users)}</Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};
const removeArray = value => {
  const array = [];
  value.forEach(o => {
    array.push(_.pickBy(o, oo => !_.isArray(oo)));
  });
  return array;
};
const createTable = users => {
  const isArray = _.isArray(users);
  let result = [];
  if (isArray) {
    result = removeArray(users);
  }

  const data = { tableheader, rows: result };

  return (
    <React.Fragment>
      <Tables data={data} />
    </React.Fragment>
  );
};

UserTable.propTypes = { getAllUsers: PropTypes.func, users: PropTypes.object };

const mapDispatchToProps = dispatch => ({
  getAllUsers: () => {
    dispatch(loadUsers());
  },
});
const mapStateToProps = createStructuredSelector({
  users: makeSelectAdminPage(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(UserTable);
