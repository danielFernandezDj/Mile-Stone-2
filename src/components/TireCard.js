import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// MUI dependencies
import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { ThemeProvider, createTheme, Stack, Box } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Typography, Button } from '@mui/material';

const theme = createTheme({
  palette: {
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    addButton: {
      main: '#2386cf',
      light: '#84d3fa',
      dark: '#28a7f2',
      contrastText: '#242105',
    },
  }
});

export default function TireCard() {
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: 345, mt: 2, mb: 2 }} >
        <Stack direction={'row'} >
          <CardMedia
            component="img"
            image="/images/Designer2.png"
            title="Tire"
            sx={{ width: '50%', margin: 'auto', }}
          />

          <CardContent
            width={'50%'}
            spacing={3}
            direction="column"
          >
            <Typography variant='h5' fontWeight="700"> Good Year A/T </Typography>
            <Typography variant='h6' fontWeight="700"> LT225/75.R16  </Typography>
            <Typography variant='h4' fontWeight="700" > $125 </Typography>

            <CardActions>
              <Button variant="contained" color={"addButton"} sx={{ width: '130px', }}>
                <AddRoundedIcon fontSize='large' sx={{ color: 'white', }} />
                <Typography variant='h5' fontWeight="700" textTransform={"none"} color={'white'}> Add </Typography>
              </Button>
            </CardActions>
          </CardContent>
        </Stack>
      </Card>
    </ThemeProvider>
  );
}
