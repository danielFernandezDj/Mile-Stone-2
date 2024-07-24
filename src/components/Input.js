import React, { useState } from "react";
import { Typography, Button } from '@mui/material';
import { Table, TableBody, TableCell, TableHead, TableRow  } from '@mui/material';
export default function Input() {
  const [size, setSize] = useState("");
  const apiUrl = 'http://localhost:4000/api/tires';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { size };
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

  return (
    <>
      <Typography variant="h1">List:</Typography>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <Button
          variant="contained"
          size="small"
          type="submit" // Ensure the button submits the form
        >
          Add
        </Button>
      </form>
    </>
  );
}
