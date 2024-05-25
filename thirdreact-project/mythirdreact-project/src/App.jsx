import { useEffect,useState } from "react";

function App() {

  const [key,setName] = useState("");
  const [numkey,setNumkey] = useState(0);

  return(
   <div className="App">
     <h1>Hello World</h1>

     <input type="text" className="formcontrol" onChange={(e)=>{
        setName(e.target.value);
     }} />


     <h1 className="showanskeys">My answer is : {key} </h1>

     <button type="button" className="btn" onClick={()=>{
      setNumkey((prev)=>prev - 1);
     }}> - </button>

     <span className="showcenternums">{numkey}</span>
     
     <button type="button" className="btn" onClick={()=>{
      setNumkey((prev) => prev + 1);
     }}> + </button>
     
   </div>

  );
}

export default App
