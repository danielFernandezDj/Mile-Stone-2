import * as React from 'react';
import { useContext } from 'react';
import { TireContext } from '../context/TireContext';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { Box, Stack } from '@mui/material';

export default function TireFilter() {
  const { sizeFilter, setSizeFilter, treadPatternFilter, setTreadPatternFilter } = useContext(TireContext);

  const handleSizeChange = (event) => {
    setSizeFilter(event.target.value);
  };

  const handleTreadPatternChange = (event) => {
    setTreadPatternFilter(event.target.value);
  };

  return (
    <Stack direction={'row'} margin={2} gap={1}>




      
      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="tire-size-select-label">Tire size</InputLabel>
          <Select
            labelId="tire-size-select-label"
            id="tire-size-select"
            value={sizeFilter}
            label="Tire size"
            onChange={handleSizeChange}
          >
            <MenuItem value="">none</MenuItem>
            <MenuItem value="195/60/15">195/60/15</MenuItem>
            <MenuItem value="225/65/17">225/65/17</MenuItem>
            <MenuItem value="265/70/17">265/70/17</MenuItem>
            <MenuItem value="265/70/18">265/70/18</MenuItem>
            <MenuItem value="275/55/20">275/55/20</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="tread-pattern-select-label">Tread Pattern</InputLabel>
          <Select
            labelId="tread-pattern-select-label"
            id="tread-pattern-select"
            value={treadPatternFilter}
            label="Tread Pattern"
            onChange={handleTreadPatternChange}
          >
            <MenuItem value="">none</MenuItem>
            <MenuItem value="All Season">All Season</MenuItem>
            <MenuItem value="Summer">Summer</MenuItem>
            <MenuItem value="Winter">Winter</MenuItem>
            <MenuItem value="All Terrain">All Terrain</MenuItem>
            <MenuItem value="Mud Terrain">Mud Terrain</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Stack>
  );
}