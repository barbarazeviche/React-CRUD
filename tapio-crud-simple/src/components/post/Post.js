import React from 'react'
import './post.css'

const Post = ({id,body,title, onDelete}) => {

    const handleDelete = () =>{
        onDelete(id);
    }

  return (
    <div className="listContainer">
      <div className='list'>
        <span className='id'>{id}</span>
        <span className='title'>{title}</span>
        <span className='text'>{body}</span>
        <span>
            <button className='edit-btn'>edit</button>
            <button className='delete-btn' onClick={handleDelete}>delete</button>
        </span>
      </div>  
    </div>
  )
}

export default Post 