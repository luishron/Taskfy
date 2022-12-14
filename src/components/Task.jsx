import { Card } from "@mui/material";
import React from "react";
import { TaskForm } from "./TaskForm";

export const Task = ({ task, onChange, onDelete }) => {
  return (
    <Card sx={{ mx: "auto", p: 2, m: 2 }} elevation={2} variant="outlined">
      <TaskForm task={task} onChange={onChange} onDelete={onDelete} />
    </Card>
  );
};
