import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Button, Box, TextField } from '@mui/material';

const apiUrl = 'http://localhost:4000/api/tires';

export default function TireEdit({ tires }) {
  const [size, setSize] = useState(tires.size);
  const [brand, setBrand] = useState(tires.brand);
  const [treadPattern, setTreadPattern] = useState(tires.treadPattern);

  const [tempSize, setTempSize] = useState(tires.size);

  const updateSize = async (e) => {
    e.preventDefault();
    try {
      const body = { size: tempSize };
      const response = await fetch(`${apiUrl}/${tires.tire_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        setSize(tempSize)
        window.location = "/";
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Dialog MUi
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setTempSize(size)
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
          data-bs-target={`#id${tires.tire_id}`}
        >
          Edit
        </Button>
      </Box>

      <Dialog
        open={open}
        className="modal"
        onClose={handleClose}

        aria-labelledby="alert-dialog-title"
        // aria-describedby="alert-dialog-description"

        id={`id${tires.tire_id}`}
        onClick={() => {
          setSize(tires.size);
        }}
      >
        <DialogTitle sx={{ fontSize: 30, fontWeight: 'bold' }}
          id="alert-dialog-title">
          {"Change the Size!"}
        </DialogTitle>

        <DialogContent sx={{textAlign: 'center'}}>
          <Box>
            <TextField sx={{ mb: 2, width: 1/2}}
              width="20px"
              value={tempSize}
              type="text"
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => setTempSize(e.target.value)}
            />
          </Box>

          <Box>
            <Button
              type="submit"
              variant="outlined"
              onClick={(e) => updateSize(e)}
            >
              Edit
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
