// MUI
import * as React from 'react';
import { Container } from '@mui/material';

// Components
import Input from './components/Input';
import List from './components/TireList';

function App() {
  return (
    <div>
      <Container sx={{
        border: '4px solid #b4e4fc',
        height: '100vh',
      }}>

        <Input />
        <List />

      </Container>
    </div>
  );
}

export default App;
