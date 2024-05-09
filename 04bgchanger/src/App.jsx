import {useState} from "react"

function App() {

  const [color , setColor] = useState("olive")
 
  return (
   <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
   >
    <div className="fixed flex flex-warp
    justify-center bottom-12 insert-x-0 px-2 ">

    </div>
   </div>
  )
}

export default App


// es ko fir se khud se banna haia 