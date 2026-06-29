
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


function App() {
  const[jokes,setjokes]=useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    
    .then((response)=>{
      console.log(response.data);
      setjokes(response.data)
    })
    .catch((error)=>{
      console.log(error);
      
    })
  })
  return (
    <>
    <p >jokes:{jokes.length}</p>
    <p>sameer</p>
    {
      jokes.map((joke)=>{
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <h4>{joke.description}</h4>
        </div>

      })
    }
    
</>
  )

}

export default App
