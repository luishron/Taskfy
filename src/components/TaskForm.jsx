import { Button, CardActions, CardContent, TextField } from "@mui/material";
import React, { useState } from "react";

export const TaskForm = ({ task, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleTask = (e) => {
    const textTaskInput = e.target.value;
    onChange({
      ...task,
      text: textTaskInput,
    });
  };

  return (
    <>
      {isEditing ? (
        <>
          <CardContent>
            <TextField
              fullWidth
              label="Task"
              value={task.text}
              onChange={handleTask}
              multiline
              maxRows={4}
            />
          </CardContent>
          <CardActions>
            {task.text.length > 0 && task.text.trim() ? (
              <Button
                variant="contained"
                color="primary"
                onClick={() => setIsEditing(false)}
              >
                Save
              </Button>
            ) : (
              <Button variant="contained" color="primary" disabled>
                Save
              </Button>
            )}
          </CardActions>
        </>
      ) : (
        <>
          <CardContent>{task.text}</CardContent>
          <CardActions>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </Button>
          </CardActions>
        </>
      )}
    </>
  );
};
