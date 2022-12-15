import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

export const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState("");
  const date = Date.now();
  const handleTask = (e) => {
    const textTaskInput = e.target.value;
    textTaskInput.trim() ? setText(textTaskInput) : setText("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Card
        sx={{
          mx: "auto",
          p: 2,
          m: 2,
          mb: 4,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "##e3f2fd",
        }}
        elevation={4}
      >
        <form onSubmit={handleSubmit}>
          <CardContent>
            <TextField
              fullWidth
              label="New task"
              multiline
              maxRows={4}
              id="new-task"
              placeholder="Create a new task"
              value={text}
              onChange={handleTask}
            />
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              onClick={() => {
                setText("");
                onAddTask(text, date);
              }}
              type="submit"
            >
              New
            </Button>
          </CardActions>
        </form>
      </Card>
    </>
  );
};
