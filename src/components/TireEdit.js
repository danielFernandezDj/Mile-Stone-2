import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Button, Box, TextField } from "@mui/material";

// const apiUrl = "http://localhost:4000/api/tires";
const apiUrl = '/api/tires';

export default function TireEdit({ tires }) {
  // State for the form inputs
  const [tempBrand, setTempBrand] = useState(tires.brand_name);
  const [tempSize, setTempSize] = useState(tires.size);
  const [tempTread, setTempTread] = useState(tires.tread_pattern);

  const updateTire = async (e) => {
    e.preventDefault();
    try {
      const body = { brand_name: tempBrand, size: tempSize, tread_pattern: tempTread };
      console.log("Sending data:", body);

      const response = await fetch(`${apiUrl}/${tires.tire_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log("Response status:", response.status);

      if (response.ok) {
        window.location.reload();
      } else {
        console.error("Failed to update tire:", response.statusText);
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  // Dialog MUI
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box>
        <Button
          type="button"
          variant="contained"
          onClick={handleClickOpen}
        >
          Edit
        </Button>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">{"Edit the Tire!"}</DialogTitle>
        <DialogContent sx={{ textAlign: "center" }}>
          <Box>
            <TextField
              sx={{ mb: 2, mr: 2, width: 1 / 4 }}
              value={tempBrand}
              type="text"
              variant="outlined"
              onChange={(e) => setTempBrand(e.target.value)}
            />
            <TextField
              sx={{ mb: 2, mr: 2, width: 1 / 5 }}
              value={tempSize}
              type="text"
              variant="outlined"
              onChange={(e) => setTempSize(e.target.value)}
            />
            <TextField
              sx={{ mb: 2, mr: 2, width: 1 / 4 }}
              value={tempTread}
              type="text"
              variant="outlined"
              onChange={(e) => setTempTread(e.target.value)}
            />
          </Box>

          <Box>
            <Button
              type="submit"
              variant="outlined"
              onClick={updateTire}
            >
              Save
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
