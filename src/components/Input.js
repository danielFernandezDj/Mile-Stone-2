import React, { useState } from "react";
import { Typography, Button, Input, InputLabel, } from '@mui/material';


export default function NewInput() {
  const [size, setSize] = useState("");
  const apiUrl = 'http://localhost:4000/api/tires';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { size };
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      <Typography variant="h1">Tire List </Typography>

      <form onSubmit={handleSubmit}>
        <InputLabel htmlFor="new-tire">New Tire</InputLabel>
        <Input sx={{ marginRight: 2, }}
          required
          id="tire-size"
          placeholder="225/70/15"
          inputProps={{
            'aria-label': 'tire-size',
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
          disable={!size.trim()}// Ensure the button submits the form
        >
          Add
        </Button>
      </form >
    </>
  );
}
