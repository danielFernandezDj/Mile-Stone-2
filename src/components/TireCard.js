import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React, { useContext } from 'react';

// Material UI
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { ThemeProvider, createTheme, Stack, Box } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Typography, Button } from '@mui/material';
import { TireContext } from '../context/TireContext';

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
  const { addToCart } = useContext(TireContext)

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: 345, mt: 2, mb: 2 }} >
        <Stack direction={'row'} >
          <CardMedia
            component="img"
            image={tire.image}
            title={tire.brand_name}
            sx={{ width: '50%', margin: 'auto', }}
          />

          <CardContent
            width={'50%'}
            spacing={3}
            direction="column"
          >
            <Typography variant='h5' fontWeight="700"> {tire.brand_name} </Typography>  // Brand Name
            <Typography variant='h6' fontWeight="700"> {tire.size} </Typography> // Tire Size
            <Typography variant='h4' fontWeight="700" > {tire.price} </Typography> // Price

            <CardActions>
              <Button onClick={() => addToCart(tire)}
                variant="contained"
                color={"addButton"}
                sx={{ width: '130px', }}>
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
