import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import FormModel from "../../components/formModel/formModel";
import Todo from "../../components/todo/todo";
import { authToken, logoutAction } from "../../store/actions/authAction";
import { getTodosAction } from "../../store/actions/getTodosAction";
import "./Home.scss";

function Home() {
  const [formModelIsOpen, setModelIsOpen] = useState(false);
  const todos = useSelector((state) => state.todosReducer);
  const { auth } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  // get date
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayName = days[new Date().getDay()];

  // Handle logout
  const handleLogout = () => {
    dispatch(logoutAction());
    history.push("/login");
  };

  // Open form
  const openForm = () => {
    setModelIsOpen((prev) => !prev);
  };

  useEffect(() => {
    dispatch(authToken());
    dispatch(getTodosAction());
    // eslint-disable-next-line
  }, []);

  // Route Guade
  if (!auth) return <Redirect to="/login" />;

  return (
    <>
      <div className="home">
        <div className="container">
          <div className="wrapper">
            <div className="wrapper__header">
              <div className="date__colone">
                <h1>{day}</h1>
                <div className="date__colone--detail">
                  <strong>{monthNames[month]}</strong>
                  <p>
                    {year} {dayName}
                  </p>
                </div>
              </div>
              <div className="date__coltwo">
                <div className="date__coltwo--profile">
                  {auth.profileObj.imageUrl ? (
                    <img src={auth?.profileObj.imageUrl} alt="" />
                  ) : (
                    <span>{auth.profileObj.familyName}</span>
                  )}
                </div>
                <button className="logout" onClick={handleLogout}>
                  <box-icon
                    name="log-out-circle"
                    color="#fff"
                    size="lg"
                  ></box-icon>
                </button>
              </div>
            </div>
            <div className="wrapper__body">
              <div className="content">
                <ul className="content__list">
                  {todos.map((todo) => (
                    <Todo key={todo._id} todo={todo} />
                  ))}
                </ul>
              </div>
              <div className="content__add">
                <button className="btnAdd" onClick={openForm}>
                  <box-icon name="plus" color="#fff"></box-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FormModel
        formModelIsOpen={formModelIsOpen}
        setModelIsOpen={setModelIsOpen}
      />
    </>
  );
}

export default Home;
