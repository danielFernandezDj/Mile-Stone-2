import * as React from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { Box, Stack } from '@mui/material';

export default function TireFilter() {
  const [size, setSize] = React.useState('');

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <Stack 
      direction={'row'}
      margin={2}
      gap={1}
    >
      {/*************** Tire size ***************/}
    
      <Box sx={{minWidth: 150, }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tire size</InputLabel>  
        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={size}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={0}>none</MenuItem>
          <MenuItem value={10}>195/60/15</MenuItem>
          <MenuItem value={20}>225/65/17</MenuItem>
          <MenuItem value={30}>265/70/17</MenuItem>
          <MenuItem value={20}>265/70/18</MenuItem>
          <MenuItem value={30}>275/55/20</MenuItem>
          
        </Select>
      </FormControl>
      </Box>

      {/***************  Tread Pattern  ***************/}
      <Box sx={{minWidth: 150, }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tread Pattern</InputLabel>  
        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={size}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={0}>none</MenuItem>
          <MenuItem value={10}>All Season</MenuItem>
          <MenuItem value={20}>Summer</MenuItem>
          <MenuItem value={30}>Winter</MenuItem>
          <MenuItem value={20}>All Terrain</MenuItem>
          <MenuItem value={30}>Mud Terrain</MenuItem>
        </Select>
      </FormControl>
      </Box>
    </Stack>
    
  );
}
