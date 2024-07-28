import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Button, Box, TextField } from "@mui/material";

const apiUrl = "http://localhost:4000/api/tires";

export default function TireEdit({ tires }) {
  const [brand, setBrand] = useState(tires.brand_name);
  const [size, setSize] = useState(tires.size);
  const [tread, setTread] = useState(tires.tread_pattern);

  // Set 'Temp' states
  const [tempBrand, setTempBrand] = useState(tires.brand_name);
  const [tempSize, setTempSize] = useState(tires.size);
  const [tempTread, setTempTread] = useState(tires.tread_pattern);

  const updateTire = async (e) => {
    e.preventDefault();
    try {



      const body = { brand: setBrand, size: tempSize, tread: tempTread };
      console.log("Sending data:", body); // Log the data being sent
      const response = await fetch(`${apiUrl}/${tires.tire_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log("Response status:", response.status); // Log the response status

      if (response.ok) {
        setBrand(tempBrand);
        setSize(tempSize);
        setTread(tempTread);
        window.location = "/";
      } else {
        console.error("Failed to update brand:", response.statusText);
      }

    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  // Dialog MUi
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setTempBrand(brand);
    setTempSize(size);
    setTempTread(tread);
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
        id={`id${tires.tire_id}`}
        onClick={() => {
          setBrand(tires.brand_name);
          setSize(tires.size);
          setTread(tires.tread_pattern);
        }}
      >

        <DialogContent sx={{ textAlign: "center" }}>
          <DialogTitle sx={{ fontSize: 30, fontWeight: "bold" }} id="alert-dialog-title"> {"Edit the Tire!"} </DialogTitle>
          <Box>
            <TextField
              sx={{ mb: 2, mr: 2, width: 1 / 4 }}
              width="20px"
              value={tempBrand}
              type="text"
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => setTempBrand(e.target.value)}
            />
            <TextField
              sx={{ mb: 2, mr: 2, width: 1 / 5 }}
              width="20px"
              value={tempSize}
              type="text"
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => setTempSize(e.target.value)}
            />
            <TextField
              sx={{ mb: 2, mr: 2, width: 1 / 4 }}
              width="20px"
              value={tempTread}
              type="text"
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => setTempTread(e.target.value)}
            />
          </Box>

          {/* Submit Button */}
          <Box>
            <Button
              type="submit"
              variant="outlined"
              onClick={(e) => updateTire(e)}
            >
              Edit
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
