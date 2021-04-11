import React, { useEffect, useState } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar1 from './Components/NavBar1';
import NavBar4 from './Components/NavBar4';


function App() {
  
  const [issues , setIssues] = useState([]);
  const [offset, setOffset] = useState(0);
  
  useEffect(()=>{
      fetch(`https://api.github.com/repositories/6427813/issues`)
        .then((res) => res.json())
        .then((data) => {
          setIssues(data);
        })
        .catch(() => {
          setIssues([]);
        });
    });

  return (
    <div >
      <NavBar1 />
      <NavBar4  issues={issues}/>
    </div>
  );
}



export default App;
