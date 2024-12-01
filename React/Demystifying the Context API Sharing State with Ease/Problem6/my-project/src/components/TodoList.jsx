import { useContext } from "react";
import { Todocontext } from "./todocontext";

export let TodoList = () => {
  let { todo, deletetodo } = useContext(Todocontext);
  return (
    <div>
      <h2>Todo List</h2>
      {todo.length === 0 ? (
        <div>
          <h4>Todo is Empty</h4>
        </div>
      ) : (
        todo.map((ele) => {
          return (
            <div key={ele.id}>
              <h3>{ele.title}</h3>
              <button onClick={() => deletetodo(ele.id)}>Delete</button>
            </div>
          );
        })
      )}
    </div>
  );
};
