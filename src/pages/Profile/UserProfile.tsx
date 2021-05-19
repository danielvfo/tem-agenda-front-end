import React, { useState } from 'react';
import {
  Button,
  TextField,
  makeStyles,
  Typography,
  Container,
  Grid,
  Link,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Link as RouterLink } from 'react-router-dom';
import api from '../../services/api';

type Inputs = {
  userType: string;
  name: string;
  userName: string;
  phone: string;
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

const SignUp: React.FC = () => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm<Inputs>();

  const { mutate } = useMutation(
    (data: Inputs) => {
      console.log(data.userType);

      if (data.userType === 'user') {
        return api.post('/user', {
          name: data.name,
          userName: data.userName,
          email: data.email,
          password: data.password,
          phone: data.phone,
        });
      }
      return api.post('/business', {
        name: data.name,
        userName: data.userName,
        email: data.email,
        password: data.password,
        phone: data.phone,
      });
    },
    { onSuccess: response => console.log(response) },
  );

  return (
    <Container component="main" maxWidth="xs">
      <form onSubmit={handleSubmit(data => mutate(data))}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h3">
            Cadastro
          </Typography>

          <div>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="name"
              label="Nome completo"
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
          <Grid container>
            <Grid item>
              <Link component={RouterLink} to="/">
                Já tem uma conta? Faça o login.
              </Link>
            </Grid>
          </Grid>
        </div>
      </form>
    </Container>
  );
};

export default SignUp;
