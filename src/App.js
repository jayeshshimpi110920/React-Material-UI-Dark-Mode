import { Box, CssBaseline, Typography } from "@material-ui/core";
import ThemeWrapper from "./theme/ThemeWrapper";
import ThemeToggleButton from "./theme/ToggleButton";
import "./styles.css";
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    }
  };

  const addTask = () => {
    const newTask = { taskName: task };
    setTodoList([...todoList, newTask]);
    setTask("");
  };

  const completeTask = (taskNameToDelete) => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };
  return (
    <div className="App">
      <ThemeWrapper>
        <CssBaseline />
        <Box m={2}>
          <Typography variant="h4">Todo- List With Dark Mode</Typography>
          &copy; Jayesh Shimpi
        </Box>
        <Box m={2} display="flex" justifyContent="center">
          <ThemeToggleButton />
        </Box>
        <>
          <input
            type="text"
            placeholder="Enter TODO Task Here"
            name="task"
            value={task}
            onChange={handleChange}
          />
          <button onClick={addTask}>Add</button>

          {/* todo list */}
          <div
            style={{
              width: "60%",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "left"
            }}
          >
            <ol>
              {todoList.map((task, key) => {
                return (
                  <>
                    <li>
                      <span>{task.taskName}</span>{" "}
                      <button
                        onClick={() => {
                          completeTask(task.taskName);
                        }}
                      >
                        Delete
                      </button>
                    </li>
                  </>
                );
              })}
            </ol>
          </div>
        </>
      </ThemeWrapper>
    </div>
  );
}

export default App;
