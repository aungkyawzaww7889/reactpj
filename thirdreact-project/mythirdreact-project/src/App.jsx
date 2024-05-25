import { useReducer,useEffect,useState } from "react";

const firstReducer = (state,action) =>{

  switch(action.type){
    case "minus" : return { ...state, numkey : state.numkey -1};
    case "plus" : return {...state, numkey : state.numkey +1};
    case "showdata" : return {...state, showtext : action.payload}
  }

}

const ACTION ={
  MINUS : "minus",
  PLUS : "plus",
  SHOWDATA : "showdata"
}



function App() {

  const [state,dispatch] = useReducer(firstReducer,{numkey : 0, showtext : "Hello"});

  return(
   <div className="App">
     <h1>Hello World</h1>

    


     {/* useEffect  */}

     <input type="text" className="formcontrol" onChange={(e)=>{
       dispatch({type: "showdata", payload : e.target.value})
     }}/>

     <h1 className="showanskeys">My answer is : {state.showtext} </h1>

    <button type="button" className="btn" onClick={()=>{
      dispatch({type: ACTION.MINUS})
    }}> - </button>

    <span className="showcenternums">{state.numkey}</span>
    
    <button type="button" className="btn" onClick={()=>{
    dispatch({type:"plus"})
    }}> + </button>
     
   </div>

  );
}


export default App
