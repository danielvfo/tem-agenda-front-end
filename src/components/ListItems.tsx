import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { Link as RouterLink } from 'react-router-dom';

type MenuProps = {
  closeDrawer: () => void;
};

export const UserMenu: React.FC<MenuProps> = ({ closeDrawer }: MenuProps) => {
  return (
    <div>
      <ListItem
        button
        onClick={closeDrawer}
        component={RouterLink}
        to="/user-profile"
      >
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Perfil" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <EventAvailableIcon />
        </ListItemIcon>
        <ListItemText primary="Meus Compromissos" />
      </ListItem>
    </div>
  );
};

export const BusinessMenu: React.FC<MenuProps> = ({
  closeDrawer,
}: MenuProps) => {
  return (
    <div>
      <ListItem
        button
        onClick={closeDrawer}
        component={RouterLink}
        to="/business-profile"
      >
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Perfil" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <EventAvailableIcon />
        </ListItemIcon>
        <ListItemText primary="Meus Compromissos" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DateRangeIcon />
        </ListItemIcon>
        <ListItemText primary="Agenda" />
      </ListItem>
    </div>
  );
};
