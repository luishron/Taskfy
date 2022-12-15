import {
  Button,
  CardActions,
  CardContent,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";

export const TaskForm = ({ task, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleTask = (e) => {
    const textTaskInput = e.target.value;
    const date = Date.now(); // Obtiene el timestamp actual
    onChange({
      ...task,
      text: textTaskInput,
      date, // Guarda la fecha en el objeto task
    });
  };

  const canSaveTask = task.text.length > 0 && task.text.trim();

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
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsEditing(false)}
              disabled={!canSaveTask}
            >
              Save
            </Button>
          </CardActions>
        </>
      ) : (
        <>
          <CardContent>{task.text}</CardContent>
          <CardActions>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" gap={1}>
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
              </Stack>
              {/* Muestra la fecha en formato legible si es válida */}
              {/* De lo contrario, muestra un mensaje de error */}
              <Stack direction="row" alignItems="center" gap={0.5}>
                <Typography
                  sx={{
                    fontSize: 14,
                  }}
                >
                  {isNaN(task.date)
                    ? "Invalid date"
                    : new Date(task.date).toLocaleString()}
                </Typography>
                <QueryBuilderOutlinedIcon
                  sx={{
                    fontSize: 14,
                  }}
                />
              </Stack>
            </Grid>
          </CardActions>
        </>
      )}
    </>
  );
};
