import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setExpanded] = useState(false);
  

function handleChange(event){
  const {value,name} = event.target

  setNote(prevValue=>{
    return {
      ...prevValue,
      [name]:value
    }
  })

}

function submitNote(event){
props.onAdd(note)
setNote( { title: "",
content: ""
})
  event.preventDefault();
}

function handleClick()
{
  setExpanded(true);
}

  return (
    <div >
      <form className="create-note">
        {isExpanded?<input  onChange={handleChange} name="title" placeholder="Title" value={note.title} />:null}
        <textarea onClick={handleClick} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded?3:1} value={note.content} />
      <Zoom in={isExpanded}><Fab  onClick={submitNote}><AddIcon /></Fab></Zoom>  
      </form>
    </div>
  );
}

export default CreateArea;
