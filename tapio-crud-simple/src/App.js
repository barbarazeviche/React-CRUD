import User from './components/User';
import AddUser from './components/AddUser';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    await fetch ('https://jsonplaceholder.typicode.com/posts/')
    .then((res) => res.json())
    .then((data) => setUsers(data))
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
      setUsers((users) => [...users, data]);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  console.log(users)
  return (
    <div className="App">
      <h3>React CRUD Using JSONplaceholder</h3>

      <br />

      <AddUser onAdd={onAdd}/>

      <div>
        {
          users.map((user) =>(
            <User id={user.id} key={user.id} title={user.title} body={user.body}/>
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
