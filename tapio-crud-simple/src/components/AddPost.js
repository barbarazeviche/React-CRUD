import React from 'react'
import { Button } from './components/Button.style';

const AddPost = ({ onAdd }) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.title.value, e.target.body.value);
    e.target.title.value = "";
    e.target.body.value = "";
}

  return (
    <div>
        <form onSubmit={handleOnSubmit}>
            <h3>Add Post</h3>
            <input placeholder='Title' name="title"/>
            <input placeholder='Body' name="body"/>
            <Button onSubmit={handleOnSubmit}>Add</Button>
            <hr/>
        </form>
        
    </div>
  )
}

export default AddPost