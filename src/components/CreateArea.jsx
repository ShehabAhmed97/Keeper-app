import React from "react";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
  const [inputText,setInputText] = React.useState("")
  const [content,setContent] = React.useState("")
  const [isClicked,setIsClicked] = React.useState(false)
  function handleChange(event) {
    const {name,value} = event.target;
    (name==="title") ? setInputText(value) : setContent(value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setInputText("");
    setContent("");
    setIsClicked(false)
    props.onAdd({title:inputText,content:content});
  }
  function handleClick() {
    setIsClicked(true)
  }
  return (
    <div>
      <form className="create-note">
      {isClicked && <input name="title" placeholder="Title" value={inputText} onChange={handleChange}/>}
        <textarea name="content" placeholder="Take a note..." rows={isClicked ? 3 : 1} value={content} onChange={handleChange} onClick={handleClick} />
        <Zoom in={isClicked && true}>
          <IconButton onClick={handleSubmit}>
            <AddIcon />
          </IconButton>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
