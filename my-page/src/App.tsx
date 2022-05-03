import React from 'react';
import logo from './logo.svg';
import './App.css';


const info = '{"name": "Mykyta", "bio": "20 y.o., student, developer, tennis player", "email": "loveukraine@gmail.com"}';
const user = JSON.parse(info);

const BioComp = () =>(
  <div className="Bio">
    <p><span>Name: </span>{user.name} </p>
    <p><span>Biography: </span>{user.bio} </p>
    <p><span>Email: </span>{user.email} </p>
  </div>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BioComp/>
      </header>
    </div>
  );
}

export default App;
