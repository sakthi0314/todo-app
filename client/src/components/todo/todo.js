import React from "react";
import randomColor from "randomcolor";
import moment from "moment";
import { useDispatch } from "react-redux";
import { updateTodoAction } from "../../store/actions/updateTodoAction";
import { getTodosAction } from "../../store/actions/getTodosAction";
import deteleTodoAction from "../../store/actions/deteleTodoAction";
import "./todo.scss";

function Todo({ todo }) {
  const dispatch = useDispatch();

  // Update Todo
  const handleUpdate = () => {
    dispatch(
      updateTodoAction(todo._id, { ...todo, isCompleted: !todo.isCompleted })
    );

    // Rendering Again
    dispatch(getTodosAction());
  };

  // Delete Todo
  const handleDelete = () => {
    dispatch(deteleTodoAction(todo._id));
    dispatch(getTodosAction());
  };

  return (
    <>
      <li
        className="todo"
        style={{
          borderLeft: `4px solid ${randomColor()}`,
          background: todo.isCompleted && "rgba(0,0,0,.1)",
        }}
      >
        <div className="todo__content">
          <div className="todo__content--left">
            <h2>{todo.task}</h2>
            <p>{todo.desc}</p>
            <span>{moment(todo.createdAt).toDate().toString()}</span>
          </div>
          <div className="todo__content--right">
            <span onClick={handleUpdate}>
              <box-icon
                type={"check-circle"}
                color="green"
                name="check-circle"
              ></box-icon>
            </span>
            <span onClick={handleDelete}>
              <box-icon color="red" name="trash-alt"></box-icon>
            </span>
          </div>
        </div>
      </li>
    </>
  );
}

export default Todo;
