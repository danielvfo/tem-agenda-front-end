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
} from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';

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
  const { register, handleSubmit, control } = useForm<Inputs>();

  return (
    <Container component="main" maxWidth="xs">
      <form onSubmit={handleSubmit(data => console.log(data))}>
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
                  onClick={() => setBusinessUserType(false)}
                />
                <FormControlLabel
                  value="business"
                  control={<Radio />}
                  label="Para seu negócio"
                  onClick={() => setBusinessUserType(true)}
                />
              </RadioGroup>
            )}
            defaultValue="user"
            rules={{ required: true }}
            name="userType"
            control={control}
          />

          <div>
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
          <div>
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
              </section>
            )}
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

export default SignUp;
