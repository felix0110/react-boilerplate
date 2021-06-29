import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';

const createItem = (item, path) => (
  <React.Fragment>
    <ListItem
      button
      key={item.text}
      component={Link}
      to={`${path}/${item.path}`}
    >
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary={item.text} />
    </ListItem>
  </React.Fragment>
);
const createItemList = (items, path) => {
  const list = items.map(item => createItem(item, path));

  return list;
};
const SidebarListItem = props => {
  const { path } = useRouteMatch();
  return <React.Fragment>{createItemList(props.items, path)}</React.Fragment>;
};

SidebarListItem.propTypes = { items: PropTypes.array };

export default SidebarListItem;
