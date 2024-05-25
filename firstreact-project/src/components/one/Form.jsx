import {useState} from "react";
import "../one/Form.css";

function Form(props){
    let [name,setName] = useState("");
    let [city,setCity] = useState("");

    const formvaluefunone = (event)=>{
        // console.log(event.target.value);
        setName(event.target.value);
    };

    const formvaluefuntwo = (event)=>{
        // console.log(event.target.value);
        setCity(event.target.value);
    };

    const showData = (event)=>{
        event.preventDefault();
        // console.log("i'm working");

        let data = {
            name,
            city
        }

        // console.log(data.name,data.city);

    //    props.addNewMember( "Send member from children to parents");
        props.addNewMember(data);

        setName("");
        setCity("");
    };

    return (
        <form onSubmit={showData}>
            
            <input type="text" name="" id="" placeholder="Enter name" onChange={formvaluefunone} value={name} />
            <input type="text" name="" id="" placeholder="Enter text" onChange={formvaluefuntwo} value={city}/>

            <button type="submit" >Add New Member</button>
        </form>
    );
}

export default Form;