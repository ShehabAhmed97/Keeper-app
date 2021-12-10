import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes,setNotes] = React.useState([]) //controlling the state of notes stored inside an initially empty array
  function addNote(note){ //passing the note into addNote function
    setNotes(prevNotes => {
      return [...prevNotes,note] //returning previous array of notes plus the new note using spread operator
    })
  }

  function deleteNote(id) { //passing the id of the note into deleteNote function
    setNotes((prevNotes) => {
      return prevNotes.filter((note,index) => {
        return index !== id
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((note, index) => 
        <Note key={index} title={note.title} content={note.content} id={index} onDelete={deleteNote}/>
      )}
      <Footer />
    </div>
  );
}

export default App;
