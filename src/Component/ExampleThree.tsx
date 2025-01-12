import React from "react";
import { useState } from "react";
import "./ExampleThree.css";

export const ExampleThree = () => {
  const [textField, settextField] = useState("");
  const [inputTextField, setinputTextField] = useState("");

  const [state, setState] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  const onSelectCheckbox=()=>{
    setIsCheck(true);
  }
  const deleteFeedback=()=>{
      if(isCheck){
          setState(false)
      }
  }


  const onChangeTextField = (e: any) => {
    settextField(e.target.value);
  };

  const onChangeInputField = (e: any) => {
    setinputTextField(e.target.value);
  };

  const onSubmitFeedback = (e: any) => {
    if (textField && inputTextField !== "") {
        e.preventDefault();
        setState(true)
      alert(
        `${textField} ${inputTextField} successfully submitted the feedback `
      );
    } else {
      alert(`Please fill the title and message`);
    }
  };
  return (
    <div className="form">
      <form onSubmit={onSubmitFeedback}>
        <div className="container">
          <label>Title</label>
          <input
            type="text"
            value={inputTextField}
            onChange={onChangeInputField}
            className="title"
            placeholder="Please enter the title name"
          ></input>
          <label>Message</label>
          <textarea
            value={textField}
            onChange={onChangeTextField}
            className="message"
            placeholder="Type your message within 250 words"
          ></textarea>
          <button type="submit" className="feedback">
            Feedback
          </button>
        </div>
      </form>
      {state ? (
        <div className="feedback-container">
          <input type="checkbox" onChange={onSelectCheckbox}></input>
          <h4>{inputTextField}</h4>
          <p>{textField}</p>
          <button onClick={deleteFeedback}>Delete</button>
        </div>
      ) : null}
    </div>
  );
};
