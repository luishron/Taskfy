import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { AddTask, TaskList } from "./components/";
import { Navbar } from "./components/Navbar";

// Estado incial: Array de objetos
const INITIAL_STATE = [
  {
    id: "f1d5cf5c-e1a8-4c5b-87a1-e3eaa6443162",
    text: "Visit Kafka Museum",
    done: true,
  },
  {
    id: "f1d5cf5c-e1a8-4c5b-87a1-e3eaa6443163",
    text: "Watch a puppet show",
    done: false,
  },
  {
    id: "f1d5cf5c-e1a8-4c5b-87a1-e3eaa6443164",
    text: "Lennon Wall pic",
    done: false,
  },
];
// Reduce

const taskReducer = (tasks, action) => {
  switch (action.type) {
    case "added": {
      return [
        // Retorna un Array de objetos
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((currentTask) => {
        return currentTask.id === action.task.id ? action.task : currentTask;
      });
    }
    case "deleted": {
      return tasks.filter((currentTask) => currentTask.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

function App() {
  let taskId = uuidv4();

  // useReduce
  const [tasks, dispatch] = useReducer(taskReducer, INITIAL_STATE);

  function handleAddTask(text) {
    text.length > 0 &&
      dispatch({
        type: "added",
        id: taskId,
        text: text,
      });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <>
      <Navbar />
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "grey.300",
          minHeight: "100vh",
          py: 2,
        }}
        md={6}
      >
        <Grid container>
          <Grid item xs={12} md={6}>
            <AddTask onAddTask={handleAddTask} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TaskList
              tasks={tasks}
              onChangeTask={handleChangeTask}
              onDeleteTask={handleDeleteTask}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
