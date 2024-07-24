import React, { useState } from "react";
import { Typography, Button } from '@mui/material';

export default function Input() {
  const [description, setDescription] = useState("");
  const apiUrl = 'http://localhost:4000/api/tires';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
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
      <Typography variant="h1"> List :</Typography>
      <form className="d-flex mt-5" onSubmit={handleSubmit}>
        <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />

        <Button
          variant="contained"
          size="small"
        >
          Add
        </Button>
      </form>
    </>
  );
}
