/* eslint-disable camelcase */
import React from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Controller, useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import api from '../../services/api';

type Business = {
  avatar: string;
  name: string;
  userName: string;
  phone: string;
  description: string;
  type: string;
  address: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  twitter: string;
  email: string;
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

const BusinessProfile: React.FC = () => {
  const classes = useStyles();
  const token = localStorage.getItem('@App:TemAgenda:token');
  const { handleSubmit, control, reset } = useForm<Business>();

  useQuery(
    [token && 'businessProfileData'],
    async () => {
      const response = await api.get<Business>('/business/profile', {
        headers: { Authorization: `token ${token}` },
      });
      return response;
    },
    {
      onSuccess: response => reset(response.data),
    },
  );

  const { mutate } = useMutation(
    (data: Business) => {
      return api.put(
        '/business/profile',
        {
          name: data.name,
          userName: data.userName,
          email: data.email,
          phone: data.phone,
          description: data.description,
          type: data.type,
          address: data.address,
          whatsapp: data.whatsapp,
          instagram: data.instagram,
          facebook: data.facebook,
          twitter: data.twitter,
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
          <Typography component="h1" variant="h3">
            Dados do Meu Negócio
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
                  label="Nome da empresa"
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
                  label="Nome de usuário do sistema"
                  autoComplete="userName"
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
              name="description"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  variant="filled"
                  margin="normal"
                  fullWidth
                  label="Descrição do negócio"
                  autoComplete="description"
                  type="text"
                  value={value || ''}
                  onChange={onChange}
                />
              )}
            />
            <Controller
              name="type"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  variant="filled"
                  margin="normal"
                  fullWidth
                  label="Ramo de atividade"
                  autoComplete="type"
                  type="text"
                  value={value || ''}
                  onChange={onChange}
                />
              )}
            />
            <Controller
              name="address"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  variant="filled"
                  margin="normal"
                  fullWidth
                  label="Endereço"
                  autoComplete="address"
                  type="text"
                  value={value || ''}
                  onChange={onChange}
                />
              )}
            />
            <Controller
              name="whatsapp"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  variant="filled"
                  margin="normal"
                  fullWidth
                  label="Número do WhatsApp"
                  autoComplete="whatsapp"
                  type="text"
                  value={value || ''}
                  onChange={onChange}
                />
              )}
            />
            <Controller
              name="instagram"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  variant="filled"
                  margin="normal"
                  fullWidth
                  label="Instagram"
                  autoComplete="instagram"
                  type="text"
                  value={value || ''}
                  onChange={onChange}
                />
              )}
            />
            <Controller
              name="facebook"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  variant="filled"
                  margin="normal"
                  fullWidth
                  label="Facebook"
                  autoComplete="facebook"
                  type="text"
                  value={value || ''}
                  onChange={onChange}
                />
              )}
            />
            <Controller
              name="twitter"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  variant="filled"
                  margin="normal"
                  fullWidth
                  label="Twitter"
                  autoComplete="twitter"
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
            Criar conta
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default BusinessProfile;
