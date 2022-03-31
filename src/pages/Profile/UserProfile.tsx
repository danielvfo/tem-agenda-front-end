/* eslint-disable camelcase */
import React, { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  Container,
  Avatar,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Controller, useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import api from '../../services/api';

type User = {
  avatar: string;
  createdAt: string;
  email: string;
  id: string;
  name: string;
  phone: string;
  updatedAt: string;
  userName: string;
  user_avatar_url: string;
};

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const UserProfile: React.FC = () => {
  const classes = useStyles();
  const token = localStorage.getItem('@App:TemAgenda:token');
  const [userData, setUserData] = useState<User>();
  const { handleSubmit, control, reset } = useForm<User>();

  useQuery(
    [token && 'userProfileData'],
    async () => {
      const response = await api.get<User>('/user/profile', {
        headers: { Authorization: `token ${token}` },
      });
      return response;
    },
    {
      onSuccess: response => {
        reset(response.data);
        setUserData(response.data);
      },
    },
  );

  const { mutate } = useMutation(
    (data: User) => {
      return api.put(
        '/user/profile',
        {
          name: data.name,
          userName: data.userName,
          email: data.email,
          phone: data.phone,
        },
        {
          headers: { Authorization: `token ${token}` },
        },
      );
    },
    { onSuccess: response => console.log(response) },
  );

  return (
    <Container component="main" maxWidth="xs">
      <form onSubmit={handleSubmit(data => mutate(data))}>
        <div className={classes.paper}>
          <div>
            <Avatar
              alt={userData?.name}
              src={userData?.avatar}
              sx={{ width: 70, height: 70 }}
            />
          </div>
          <Typography component="h1" variant="h3">
            Meus Dados
          </Typography>
          <div>
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  variant="filled"
                  margin="normal"
                  fullWidth
                  label="Nome completo"
                  autoComplete="name"
                  type="text"
                  value={value || ''}
                  onChange={onChange}
                />
              )}
            />
            <Controller
              name="userName"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  variant="filled"
                  margin="normal"
                  fullWidth
                  label="Nome de usuário"
                  autoComplete="userName"
                  type="text"
                  value={value || ''}
                  onChange={onChange}
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  variant="filled"
                  margin="normal"
                  fullWidth
                  label="Celular"
                  autoComplete="phone"
                  type="text"
                  value={value || ''}
                  onChange={onChange}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  variant="filled"
                  margin="normal"
                  fullWidth
                  label="Email"
                  autoComplete="email"
                  type="text"
                  value={value || ''}
                  onChange={onChange}
                />
              )}
            />
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Atualizar meus dados
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default UserProfile;
