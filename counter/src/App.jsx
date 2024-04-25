import { useState } from 'react' //hockes
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//hockes ko use karte hai 
const [counter,setCounter] = useState(15);  //counter is variable and setCounter is function kuch bhi name de sakte hai


  // let counter = 15

  const addValue =()=>{
    // console.log("Cliked",counter);
  //  counter = counter+1;
  setCounter(counter+1)
  }

    const removeValue = ()=>{
       setCounter(counter-1)
      
    }




  return (
    <>
     <h1>Chai or react</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>
      Add value {counter}
      </button>
     <br/>
     <button onClick={removeValue}>Remove value {counter}</button>
     <p> Footer: {counter}</p>

    </>
  )
}

export default App
