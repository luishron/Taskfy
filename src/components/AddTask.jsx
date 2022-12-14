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
              label="Create new task"
              multiline
              maxRows={4}
              id="addtask"
              placeholder="Add task"
              value={text}
              onChange={handleTask}
            />
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              onClick={() => {
                setText("");
                onAddTask(text);
              }}
              type="submit"
            >
              Add
            </Button>
          </CardActions>
        </form>
      </Card>
    </>
  );
};
