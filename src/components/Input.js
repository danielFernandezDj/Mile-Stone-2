import React, { useState } from "react";
import { Typography, Button, Input, InputLabel, Box } from '@mui/material';


export default function NewInput() {
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [tread, setTread] = useState("");
  const apiUrl = 'http://localhost:4000/api/tires';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { brand_name: brand, size, tread_pattern: tread };
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        window.location.reload(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const ariaLabel = { 'aria-label': 'description' };

  return (
    <>
      <Box
        textAlign={"center"}
      >
        <Typography variant="h1" fontWeight={"bold"}>Tire List </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <InputLabel htmlFor="brand_name">Brand Name</InputLabel>
        <Input sx={{ marginRight: 5, }}
          required
          id="brand_name"
          placeholder="Continental"
          inputProps={{
            'aria-label': 'Brand name',
            minLength: 2,
            maxLength: 35,
          }}
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />

        <InputLabel htmlFor="tire-size">Tire Size</InputLabel>
        <Input sx={{ marginRight: 5, }}
          required
          id="tire-size"
          placeholder="225/70/15"
          inputProps={{
            'aria-label': 'Tire size',
            minLength: 8,
            maxLength: 10,
          }}
          type="text"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />

        <Button
          variant="contained"
          size="small"
          type="submit"
          disabled={
            !brand.trim() &&
            !size.trim() &&
            !tread.trim()
          }>
          Add
        </Button>

        <InputLabel htmlFor="tread_pattern">Tread Pattern</InputLabel>
        <Input sx={{ marginRight: 5, }}
          required
          id="tread_pattern"
          placeholder="All Season"
          inputProps={{
            'aria-label': 'Tread Pattern',
            minLength: 2,
            maxLength: 20,
          }}
          type="text"
          value={tread}
          onChange={(e) => setTread(e.target.value)}
        />
      </form >
    </>
  );
}
