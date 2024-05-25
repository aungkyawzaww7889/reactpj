import Card from "./Card";
import { useState } from "react";


const Form = (props)=>{

    const [name,setName] = useState("");
    const [live,setLive] = useState("");
    const [email,setEmail] = useState("");


    const addUsers = (event)=>{
        event.preventDefault();
        // console.log("i working");
        // console.log(name,live,email);

        if(name.trim().length === 0 || live.trim().length===0 || email.trim().length === 0){
            // alert('Please fill a invallid value for all inputs');
            window.confirm('Please fill a invallid value for all inputs');

            return;
        }

        let userinfos = {
            name,
            live,
            email
        }

        props.getuserInfos(userinfos);

        setName('');
        setLive('');
        setEmail('');
    }

    const changename = (event)=>{
        // console.log(event.target.value);
        setName(event.target.value);

    }

    const changelive = (event)=>{
        setLive(event.target.value);
    }

    const changeemail = (event)=>{
        setEmail(event.target.value);
    }

    return(
        <Card>
            <form onSubmit={addUsers}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" className="form-control" placeholder="Enter Name" value={name} onChange={changename}/>
                </div>

                <div className="form-group">
                    <label htmlFor="live">Live</label>
                    <input type="text" name="live" id="live" className="form-control" placeholder="Enter Address" value={live} onChange={changelive} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="Email" name="Email" id="Email" className="form-control" placeholder="Enter Email" value={email} onChange={changeemail}/>
                </div>

                <button type="submit" className="btn">Submit</button>
            </form>
        </Card>
    );
}

export default Form;