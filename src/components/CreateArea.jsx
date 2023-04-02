import React, { useState } from "react";

function CreateArea(props) {
  const [text, setText] = useState({
    title: "",
    content: ""
  });

  //Saves what was written to text var
  function handleChange(event) {
    const { name, value } = event.target;

    setText((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div>
      <div className="form">
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={text.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={text.content}
        />
        <button
          onClick={() => {
            props.onAdd(text);
            setText({
              //Cleans input area after adding note
              title: "",
              content: ""
            });
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default CreateArea;
