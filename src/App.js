import { useState } from "react";
import "./App.css";
import List from "./List";

function App() {
  const [values, setValues] = useState("");
  const [todo, setTodo] = useState([]);

  let name, value;
  const onChangeHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const todoHandler = () => {
    setTodo((prevData) => {
      return [...prevData, values];
    });
    setValues("");
  };
  // delete todo
  const deleteTodo = (id) => {
    const oldTodo = [...todo];
    const todoAfterDeleted = oldTodo.filter((element, i) => {
      return i != id;
    });
    setTodo(todoAfterDeleted);
  };
  return (
    <div className="App">
      <h1>Todo-List</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="text"
          id="text"
          value={value}
          onChange={onChangeHandler}
          aria-describedby="helpId"
          placeholder="title"
          style={{ width: "50%", margin: "auto" }}
        />
      </div>
      <button className="btn btn-primary" onClick={todoHandler}>
        Add
      </button>
      {todo.map((todo, index) => {
        return (
          <List
            key={index}
            todo={todo}
            id={index}
            deleteTodo={deleteTodo}
          ></List>
        );
      })}
    </div>
  );
}

export default App;
