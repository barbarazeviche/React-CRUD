import Post from './components/Post';
import AddPost from './components/AddPost';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    await fetch ('https://jsonplaceholder.typicode.com/posts/')
    .then((res) => res.json())
    .then((data) => setPosts(data))
    .catch((err) => {
      console.log(err);
    })
  }

  const onAdd = async (title,body) => {
    await fetch('https://jsonplaceholder.typicode.com/posts/', {
      method:'POST',
      body:JSON.stringify({
        title:title,
        body:body
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    })
    .then((res) =>{
      if(res.status !== 201){
        return
      }else{
        return res.json();
      }
    })
    .then((data) => {
      setPosts((posts) => [...posts, data]);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
      method: 'DELETE'
    })
    .then((res) => {
      if(res.status !== 200){
        return
      }else{
        setPosts(posts.filter((post) => {
          return post.id !== id;
        }))
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  console.log(posts)
  return (
    <div className="App">
      <h3>React CRUD Using JSONplaceholder</h3>

      <br />

      <AddPost onAdd={onAdd}/>

      <div>
        {
          posts.map((post) =>(
            <Post 
            id={post.id} 
            key={post.id} 
            title={post.title} 
            body={post.body} 
            onDelete={onDelete}/>
          ))
        }
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
