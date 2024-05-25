import {useState} from "react";
import "../one/Students.css";

function Students(props){ 


    // let name = props.name.toUpperCase();
    // let city = props.city.toUpperCase();

    // const showalert = ()=>{
    //     alert("hello i am working from const variable")
    // }

    const [name,setName] = useState(props.name);
    const [city,setCity] = useState(props.city);


    // const updatetext = ()=>{
    //     // console.log("i'm working");

    //     // name = "Updated Name";
    //     // console.log(name);

    //     setName("You Updated!!!");
    //     setCity("You Change City");
    // }

    return(
        <ul>

            <li>Name : {name}</li>
            <li>City : {city}</li>
   


            {/* method 1 */}
            {/* <button type="button" className="btn" onClick={()=>{
                alert("Hello I am working");
            }}>Alert</button> */}


            {/* method2  */}
            {/* <button type="button" className="btn" onClick={updatetext}>Alert </button> */}


        </ul>
    );
}

export default Students;

// 13min 