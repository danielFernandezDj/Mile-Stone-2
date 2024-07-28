import React, { useState } from "react";
import { Typography, Button, Input, InputLabel, Box } from '@mui/material';


export default function NewInput() {
  const [size, setSize] = useState("");
  const [brandName, setBrandName] = useState("");
  const [treadPattern, setTreadPattern] = useState("")

  const apiUrl = 'http://localhost:4000/api/tires';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { size, brand_name: brandName, tread_pattern: treadPattern };
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

        <InputLabel htmlFor="brand_name">Brand Name</InputLabel>
        <Input sx={{ marginRight: 5, }}
          required
          id="brand_name"
          placeholder="Continental"
          inputProps={{
            'aria-label': 'Brand name',
            minLength: 4,
            maxLength: 35,
          }}
          type="text"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
        />
        <Button
          variant="contained"
          size="small"
          type="submit"
          disabled={!size.trim() && !brandName.trim() && !treadPattern.trim()} // Disable button if size is empty or whitespace
        >
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
          value={treadPattern}
          onChange={(e) => setTreadPattern(e.target.value)}
        />
      </form >
    </>
  );
}
