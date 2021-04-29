import React from 'react';
import { Container, Typography, Box, Link } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h1" align="center" gutterBottom>
            Tem Agenda
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
              Tem Agenda
            </Link>{' '}
            {new Date().getFullYear()}.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default App;
