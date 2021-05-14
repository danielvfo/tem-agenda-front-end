import React from 'react';
import {
  Button,
  TextField,
  makeStyles,
  Typography,
  Container,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import api from '../../services/api';

type Inputs = {
  name: string;
  userName: string;
  phone: string;
  description?: string;
  type?: string;
  address?: string;
  whatsapp?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  email: string;
  password: string;
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
  const { register, handleSubmit } = useForm<Inputs>();

  const { mutate } = useMutation((data: Inputs) => {
    return api.post('/business', {
      name: data.name,
      userName: data.userName,
      email: data.email,
      password: data.password,
      phone: data.phone,
      description: data.description,
      type: data.type,
      address: data.address,
      whatsapp: data.whatsapp,
      instagram: data.instagram,
      facebook: data.facebook,
      twitter: data.twitter,
    });
  });

  return (
    <Container component="main" maxWidth="xs">
      <form onSubmit={handleSubmit(data => mutate(data))}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h3">
            Perfil
          </Typography>

          <div>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="name"
              label="Nome do negócio"
              required
              {...register('name', { required: true })}
              autoComplete="name"
              autoFocus
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="userName"
              label="Nome de usuário"
              required
              {...register('userName', { required: true })}
              autoComplete="userName"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="phone"
              label="Celular"
              required
              {...register('phone', { required: true })}
              autoComplete="phone"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              required
              {...register('email', { required: true })}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              required
              {...register('password', { required: true })}
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="type"
              label="Tipo de negócio"
              required
              {...register('type', { required: true })}
              autoComplete="type"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="address"
              label="Endereço"
              required
              {...register('address', { required: true })}
              autoComplete="address"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="description"
              label="Descrição"
              {...register('description', {
                maxLength: 10,
              })}
              autoComplete="description"
              autoFocus
              multiline
              rows="8"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="whatsapp"
              label="WhatsApp"
              {...register('whatsapp')}
              autoComplete="whatsapp"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="instagram"
              label="Instagram"
              {...register('instagram')}
              autoComplete="instagram"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="facebook"
              label="Facebook"
              {...register('facebook')}
              autoComplete="facebook"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="twitter"
              label="Twitter"
              {...register('twitter')}
              autoComplete="twitter"
              autoFocus
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
