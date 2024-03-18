import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Input, TextField } from "@mui/material";

const style = {
  display: "flex",
  flexDirection: "column",
  gap: 4,
  width: 800,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "24px",
  boxShadow: 24,
  p: "40px 60px",
  background: "rgba(0, 0, 0, 0.8)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.7)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
};

export const ModalPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="container">
        <div className="relative left-[750px]">
          <Button
            onClick={handleOpen}
            sx={{
              width: "20px",
              height: "60px",
              borderRadius: "50%",
              background: "gray",
              color: "white",
              fontSize: "30px",
              ":hover": {
                background: "black",
                color: "white",
              },
            }}
          >
            +
          </Button>
          <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="h2"
                className="text-white"
              >
                Add shortcut
              </Typography>
              <form className="">
                <label>
                  <p className="text-white">Name</p>
                  {/* <Input fullWidth type="name" className="text-white" /> */}
                  <TextField
                    label="Enter your text"
                    variant="outlined"
                    // You can add more props as needed, such as onChange, value, etc.
                  />
                </label>
              </form>
              <form className="mt-4">
                <label>
                  <p className="text-white">URL</p>

                  <Input fullWidth type="name" />
                </label>
              </form>
              <div className="buttons flex items-center justify-end gap-5">
                <Button variant="outlined">Exit</Button>
                <Button variant="contained">Save</Button>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
};
