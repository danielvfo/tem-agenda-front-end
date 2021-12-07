import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import DateRangeIcon from '@mui/icons-material/DateRange';
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
