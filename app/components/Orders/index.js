/**
 *
 * Orders
 *
 */

import React from 'react';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Title from 'components/Title';
import Tables from 'components/Tables'

// Generate Table Data
const createData = (id, date, name, shipTo, paymentMethod, amount) => ({
  id,
  date,
  name,
  shipTo,
  paymentMethod,
  amount,
});
const tableheader = [
  "Date", "Name", "Ship To", "Payment Method", "Sale Amount"
]
const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(
    2,
    '16 Mar, 2019',
    'Tom Scholz',
    'Boston, MA',
    'MC ⠀•••• 1253',
    100.81,
  ),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const Orders = () => {
  const classes = useStyles();
  const data = { "tableheader": tableheader, "rows": rows }
  return (
    <React.Fragment>
      <Tables data={data} ></Tables>
    </React.Fragment>
  );
};

Orders.propTypes = {};

export default Orders;
