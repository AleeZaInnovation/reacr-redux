import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [users, setUser] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    getList()
  }, []);

  function getList() {
    fetch("http://localhost:3000/posts").then((result) => {
      result.json().then((resp) => {
        //console.warn(resp)
        setUser(resp)
        setTitle(resp[0].title)
        setAuthor(resp[0].author)
        setUserId(resp[0].userId)
      });
    });
  }
  //console.warn(users)
  function deleteUser(id) {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getList()
        //setUser(resp);
      })
    })
  }
  function selectUser(id) {
    console.warn(users[id - 1])
    let item = users[id - 1]
    setTitle(item.title)
    setAuthor(item.author)
    setUserId(item.id)
  }

  function updateUser()
  {
    let item= {title,author,userId}
    fetch(`http://localhost:3000/posts/${userId}`, {
      method: 'PUT',
      headers:{
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getList()
        //setUser(resp);
      })
    })
  }

  return (
    <div className="App">
      <h1>Delete Data from API</h1>
      <table border="1">
        <tbody>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Author</td>
            <td>Operation</td>
          </tr>
          {users.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>
                <button onClick={() => deleteUser(item.id)}>Delete</button>
                <button onClick={() => selectUser(item.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} /><br /><br />
        <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} /><br /><br />
        <button onClick={updateUser}>Update User</button>
      </div>
    </div>

  );
}

export default App;
