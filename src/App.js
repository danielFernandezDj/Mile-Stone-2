// MUI
import * as React from 'react';
import { Container, Box } from '@mui/material';

// Components
import TireCard from './components/TireCard';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Container sx={{
        border: '4px solid #b4e4fc',
        height: '100vh',
      }}>
        <TireCard />
      </Container>
    </div>
  );
}

export default App;
