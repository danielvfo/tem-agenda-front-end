import React from 'react';
import {
  RadioGroup,
  Button,
  TextField,
  FormControlLabel,
  Link,
  Grid,
  makeStyles,
  Typography,
  Radio,
  Container,
} from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';

type Inputs = {
  email: string;
  password: string;
  userType: string;
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

const SignIn: React.FC = () => {
  const classes = useStyles();
  const { register, handleSubmit, control } = useForm<Inputs>();

  return (
    <Container component="main" maxWidth="xs">
      <form onSubmit={handleSubmit(data => console.log(data))}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h3">
            Login
          </Typography>
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
          <Controller
            render={({ field }) => (
              <RadioGroup row aria-label="userType" {...field} name="userType">
                <FormControlLabel
                  value="user"
                  control={<Radio />}
                  label="Pessoa"
                />
                <FormControlLabel
                  value="business"
                  control={<Radio />}
                  label="Negócio"
                />
              </RadioGroup>
            )}
            defaultValue="user"
            rules={{ required: true }}
            name="userType"
            control={control}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="http://#" variant="body2">
                Esqueceu a senha?
              </Link>
            </Grid>
          </Grid>
          <br />
          <Grid container>
            <Grid item>
              <Link href="http://#" variant="body2">
                Não tem uma conta? Faça o cadastro
              </Link>
            </Grid>
          </Grid>
        </div>
      </form>
    </Container>
  );
};

export default SignIn;
