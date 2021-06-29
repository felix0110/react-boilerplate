/**
 *
 * Tables
 *
 */

import React from 'react';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import Title from '../Title';

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));
const createDetail = (key, detail) => (
  <React.Fragment>
    <TableCell key={key}>{detail}</TableCell>
  </React.Fragment>
);
const createDetails = details => {
  const list = [];
  Object.entries(details).forEach(([key, value]) => {
    list.push(createDetail(key, value));
  });

  return <TableRow>{list}</TableRow>;
};
const Tables = props => {
  const classes = useStyles();
  const isValid = props.data.rows.length > 0;

  return (
    <React.Fragment>
      <Title>User</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            {props.data.tableheader.map(header => (
              <TableCell key={header}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {isValid ? (
            props.data.rows.map(row => createDetails(row))
          ) : (
            <React.Fragment />
          )}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        {/* <Link href="#">See more Tables</Link> */}
      </div>
    </React.Fragment>
  );
};

Tables.propTypes = { data: PropTypes.object };

export default Tables;
