import { Grid, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AddTask, TaskList } from "./components/";
import { Navbar } from "./components/Navbar";
import { darkTheme, lightTheme } from "./themes";

const INITIAL_STATE = [
  {
    id: "f1d5cf5c-e1a8-4c5b-87a1-e3eaa6443162",
    text: "Learn about Solidity",
    date: 1601067316438,
    done: true,
  },
  {
    id: "f1d5cf5c-e1a8-4c5b-87a1-e3eaa6443163",
    text: "Create small projects in solidity",
    date: 1601067316438,
    done: false,
  },
  {
    id: "f1d5cf5c-e1a8-4c5b-87a1-e3eaa6443164",
    text: "Find out more about Solidity",
    date: 1601067316438,
    done: false,
  },
];

const taskReducer = (tasks, action) => {
  switch (action.type) {
    case "added": {
      return [
        // Retorna un Array de objetos
        ...tasks,
        {
          id: action.id,
          text: action.text,
          date: action.date,
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

  const [dark, setDark] = useState(false);
  const [tasks, dispatch] = useReducer(taskReducer, INITIAL_STATE);

  function handleAddTask(text, date) {
    text.length > 0 &&
      dispatch({
        type: "added",
        id: taskId,
        date: date,
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
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <Navbar check={dark} change={() => setDark(!dark)} />
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
    </ThemeProvider>
  );
}

export default App;
