import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { closeModal } from "../../redux/slises/modal";
import { useState } from "react";
import { addEntry } from "../../redux/slises/calculator";

const style = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
export function AddEntryModal() {
  const { open, category } = useAppSelector((store) => store.modal);
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(closeModal());
  };
  const [value, setValue] = useState("");
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          sx={{ textAlign: "center" }}
          id="modal-modal-title"
          variant="body1"
          component="h2"
        >
          Добавить в категорию {category}
        </Typography>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addEntry({ category, type: value }));
            dispatch(closeModal());
            setValue("");
          }}
        >
          <TextField
            sx={{ marginTop: "10px" }}
            id="outlined-basic"
            size="small"
            variant="outlined"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <Button sx={{ marginTop: "10px" }} type="submit" variant="outlined">
            Добавить
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
