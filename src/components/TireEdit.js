import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Button, Box } from '@mui/material';

const apiUrl = 'http://localhost:4000/api/tires';

export default function TireEdit({ tires }) {
  const [size, setSize] = useState(tires.size);

  const updateSize = async (e) => {
    e.preventDefault();
    try {
      const body = { size };
      const response = await fetch(`${apiUrl}/${tires.tire_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        window.location = "/";
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Dialog MUi
  const [open, setOpen] = React.useState(false);

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
          data-bs-target={`#id${tires.tire_id}`}
        >
          Edit Tire
        </Button>
      </Box>

      <Dialog
        open={open}
        className="modal"
        onClose={handleClose}

        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"

        id={`id${tires.tire_id}`}
        onClick={() => {
          setSize(tires.size);
        }}
      >
        <DialogTitle id="alert-dialog-title">
          {"Type a different value!"}
        </DialogTitle>

          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Task</h4>
              <Button
                type="button"
                variant="contained"
                onClick={() => {
                  setSize(tires.size);
                }}
              ></Button>
            </div>

            <div className="modal-body">
              <input className="form-control" type="text" value={size} onChange={(e) => setSize(e.target.value)} />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={(e) => updateSize(e)}
              >
                Edit
              </button>
            </div>
          </div>
      </Dialog>
    </div>
  );
}