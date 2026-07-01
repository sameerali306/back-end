
 import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

function App() {

  const [jokes, setJokes] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:5000/api/jokes")
    .then((response)=>{
      setJokes(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })

  },[]);


  return (
    <div className="container">

      <h1>Developer Jokes</h1>

      <div className="cards">

        {jokes.map((joke)=>(
          
          <div className="card" key={joke.id}>

            <h2>{joke.name}</h2>

            <p>{joke.description}</p>

          </div>

        ))}

      </div>

    </div>
  )
}

export default App;

