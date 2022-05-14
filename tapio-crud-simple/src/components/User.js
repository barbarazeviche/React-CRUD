import React from 'react'
import './user.css'

const User = ({id,body,title}) => {
  return (
    <div className='list'>
        <span>{id}</span>
        <span>{title}</span>
        <span>{body}</span>
        <span>
            <button>edit</button>
            <button>delete</button>
        </span>
        
    </div>
  )
}

export default User