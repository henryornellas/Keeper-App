import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  //Adds new note
  function add(text) {
    setNotes((prevNotes) => {
      return [...prevNotes, text];
    });
  }

  //Deletes note by only returning items that don't match the passed ID.
  function deleteItem(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={add} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onChecked={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
