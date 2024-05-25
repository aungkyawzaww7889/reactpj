import Formbox from "./Form.jsx";
import List from "./List.jsx";
import { useState } from "react";


const Main = () => {
    const [userInfos,setUserInfos]  = useState([]);

    const getuserInfos = (userObjs)=>{
        // console.log(userObjs);

        setUserInfos([...userInfos,userObjs]);
    }

  return (
    <section className="main">
        <Formbox getuserInfos={getuserInfos} />
        <List userInfos = {userInfos} />
    </section>
  )
}

export default Main;
