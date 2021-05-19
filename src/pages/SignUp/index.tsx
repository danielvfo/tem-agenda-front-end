import React, { useState } from 'react';
import {
  RadioGroup,
  Button,
  TextField,
  FormControlLabel,
  makeStyles,
  Typography,
  Radio,
  Container,
  Grid,
  Link,
} from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { Link as RouterLink } from 'react-router-dom';
import * as yup from 'yup';
import api from '../../services/api';

type Inputs = {
  userType: string;
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

const userSchema = yup.object().shape({
  userType: yup.string().required(),
  name: yup.string().required(),
  userName: yup.string().required(),
  phone: yup.number().positive().integer().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const businessSchema = yup.object().shape({
  userType: yup.string().required(),
  name: yup.string().required(),
  userName: yup.string().required(),
  phone: yup.number().positive().integer().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  description: yup.string().required(),
  type: yup.string().required(),
  address: yup.string(),
  whatsapp: yup.number().positive().integer(),
  instagram: yup.string().url(),
  facebook: yup.string().url(),
  twitter: yup.string().url(),
});

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
  const [businessUserType, setBusinessUserType] = useState(false);
  const [schema, setSchema] = useState(userSchema);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

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
        description: data.description,
        type: data.type,
        address: data.address,
        whatsapp: data.whatsapp,
        instagram: data.instagram,
        facebook: data.facebook,
        twitter: data.twitter,
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
          <Controller
            render={({ field }) => (
              <RadioGroup row aria-label="userType" {...field} name="userType">
                <FormControlLabel
                  value="user"
                  control={<Radio />}
                  label="Para você"
                  onClick={() => {
                    setBusinessUserType(false);
                    setSchema(userSchema);
                  }}
                />
                <FormControlLabel
                  value="business"
                  control={<Radio />}
                  label="Para seu negócio"
                  onClick={() => {
                    setBusinessUserType(true);
                    setSchema(businessSchema);
                  }}
                />
              </RadioGroup>
            )}
            defaultValue="user"
            rules={{ required: true }}
            name="userType"
            control={control}
          />
          {errors.userType && <p>{errors.userType.message}</p>}
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="name"
            label={businessUserType ? 'Nome do negócio' : 'Nome completo'}
            required
            {...register('name', { required: true })}
            autoComplete="name"
            autoFocus
          />
          {errors.name && <p>{errors.name.message}</p>}
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
          {errors.userName && <p>{errors.userName.message}</p>}
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
          {errors.phone && <p>{errors.phone.message}</p>}
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
          {errors.email && <p>{errors.email.message}</p>}
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
          {errors.password && <p>{errors.password.message}</p>}
          {businessUserType && (
            <section id="business-specific-fields">
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
              {errors.type && <p>{errors.type.message}</p>}
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
              {errors.address && <p>{errors.address.message}</p>}
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
              {errors.description && <p>{errors.description.message}</p>}
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
              {errors.whatsapp && <p>{errors.whatsapp.message}</p>}
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
              {errors.instagram && <p>{errors.instagram.message}</p>}
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
              {errors.facebook && <p>{errors.facebook.message}</p>}
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
              {errors.twitter && <p>{errors.twitter.message}</p>}
            </section>
          )}

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
