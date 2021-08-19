import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { animated, useSpring } from "react-spring";
import { createTodoAction } from "../../store/actions/createTodoAction";
import "./formModel.scss";

function FormModel({ formModelIsOpen, setModelIsOpen }) {
  const titleRef = useRef();
  const descRef = useRef();
  const dispatch = useDispatch();

  // spring animation
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: formModelIsOpen ? 1 : 0,
    tranform: formModelIsOpen ? `translateY(0%)` : `translateY(-100%)`,
  });

  // Esc event to close model
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && formModelIsOpen) {
        setModelIsOpen(false);
      }
    },
    [formModelIsOpen, setModelIsOpen]
  );

  // Submitting form
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = {
      task: titleRef.current.value,
      desc: descRef.current.value,
    };

    dispatch(createTodoAction(inputs));

    setModelIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", keyPress);

    return () => window.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {formModelIsOpen ? (
        <animated.div style={animation}>
          <div className="formModel">
            <span
              className="formModel__close"
              onClick={() => setModelIsOpen((prev) => !prev)}
            >
              <box-icon name="x"></box-icon>
            </span>
            <form className="formModel__form" onSubmit={handleSubmit}>
              <div className="formModel__title">
                <input type="text" placeholder="Title" ref={titleRef} />
              </div>
              <div className="formModel__desc">
                <textarea type="text" placeholder="Description" ref={descRef} />
              </div>
              <div className="formModel__submit">
                <button className="submit"> Submit</button>
              </div>
            </form>
          </div>
        </animated.div>
      ) : null}
    </>
  );
}

export default FormModel;
