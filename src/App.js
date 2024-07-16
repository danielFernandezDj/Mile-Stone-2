// MUI
import * as React from 'react';
import { Container, Box } from '@mui/material';

// Components
import TireCard from './components/TireCard';

function App() {
  return (
    <Container sx={{
      border: '4px solid #b4e4fc',
      height: '100vh',
    }}>
      <TireCard />
    </Container>
  );
}

export default App;
