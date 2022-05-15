import React from 'react'
import './post.css'

const Post = ({id,body,title, onDelete}) => {

    const handleDelete = () =>{
        onDelete(id);
    }

  return (
    <div className='list'>
        <span>{id}</span>
        <span>{title}</span>
        <span>{body}</span>
        <span>
            <button>edit</button>
            <button onClick={handleDelete}>delete</button>
        </span>
        
    </div>
  )
}

export default Post 