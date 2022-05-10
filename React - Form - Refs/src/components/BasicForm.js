import { useRef, useState } from "react";

import classes from "./BasicForm.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    email: true,
  });

  const nameInputHandler = (event) => {
    setNameInput(event.target.value);
  };

  const emailInputHandler = (event) => {
    setEmailInput(event.target.value);
  };

  const nameInputRef = useRef();
  const emailInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    console.log("yup");
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    const enteredNameIsValid = isNotEmpty(enteredName);
    const enteredEmailIsValid = isEmail(enteredEmail);

    setFormInputsValidity({
      name: enteredNameIsValid,
      email: enteredEmailIsValid,
    });

    const formIsValid = enteredNameIsValid && enteredEmailIsValid;

    if (!formIsValid) return;

    props.onSubmit({
      name: enteredName,
      email: enteredEmail,
    });

    setNameInput("");
    setEmailInput("");
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className="control-group">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            ref={nameInputRef}
            value={nameInput}
            onChange={nameInputHandler}
          />
          {!formInputsValidity.name && <p>Please enter a valid name.</p>}
        </div>
      </div>

      <div className="control-group">
        <div>
          <label htmlFor="name">E-Mail Address</label>
          <input
            type="text"
            id="name"
            ref={emailInputRef}
            value={emailInput}
            onChange={emailInputHandler}
          />
          {!formInputsValidity.email && <p>Please enter a valid email.</p>}
        </div>
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
