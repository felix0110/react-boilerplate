import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
const { path } = useRouteMatch();
const createItem = item => (
  <React.Fragment key={item.index}>
    <ListItem button component={Link} to={`${path}/${item.path}`}>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary={item.text} />
    </ListItem>
  </React.Fragment>
);
const createItemList = items => {
  const list = items.map(item => createItem(item));

  return list;
};
const SidebarListItem = props => (
  <React.Fragment>{createItemList(props.items)}</React.Fragment>
);

SidebarListItem.propTypes = { items: PropTypes.array };

export default SidebarListItem;
