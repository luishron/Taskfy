import React from "react";
import { Task } from "./Task";

export const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          task={task}
          onChange={onChangeTask}
          onDelete={onDeleteTask}
          key={task.id}
        />
      ))}
    </>
  );
};
