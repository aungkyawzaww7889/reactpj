// import One from "./components/one/One.jsx";
import Students from "./components/one/Students.jsx";
// import Background from "./components/one/Background.jsx";
import Form from "./components/one/Form.jsx";
import { useState } from "react";

function App() {

    // const name = "i'm code hub...";
    // let c = 10;
    // let b = 20;


    const [students,setStudents] = useState([]);

    // const [students,setStudents] = useState([
    //   {
    //     name: "aung aung",
    //     city: "ygn"
    //   },

    //   {
    //     name :"kyaw kyaw",
    //     city : 'mdy'
    //   },

    //   {
    //     name : "nu nu",
    //     city : "mdy"
    //   }
    // ]);


    // let students = [
    //   {
    //     name: "aung aung",
    //     city: "ygn"
    //   },

    //   {
    //     name :"kyaw kyaw",
    //     city : 'mdy'
    //   },

    //   {
    //     name : "nu nu",
    //     city : "mdy"
    //   }
    // ]


    const setnewMember = (memInfo)=>{

      // return memInfo;
      // console.log(memInfo.name);
      // console.log(memInfo.city);

      // setStudents(memInfo);
      setStudents([...students,memInfo]);
        
    };




    let contentsection = <p>No member yet!</p>;

    if(!students.length < 1){
      contentsection =  students.map((student)=>(
        // console.log(student)
        <Students name={student.name} city={student.city} key={student.name}></Students>
      ))
    }

  return (
   
      // <div className="App">
      //   <h1>Hello World</h1>
      //   {/* <One></One> */}
      //   <One name={name} calculates={c + b}/>
        
      //   <Background>
      //     <Students name = {students[0].name} city = {students[0].city} />
      //     <Students name = {students[1].name} city = {students[1].city} />
      //     <Students name = {students[2].name} city = {students[2].city} />
      //   </Background>

      //   <Background>
          
      //     <Form />
         
      //   </Background>

      // </div>





     

      <div className="App">

          <section>
            {/* {students.map((student)=>(
                // console.log(student);
                <Students name = {student.name} city = {student.city} />
                // <Students name={student.name} city={student.city}></Students>
              ))} */}

              {
                // students.map((student)=>(
                //   // console.log(student)
                //   <Students name={student.name} city={student.city} key={student.name}></Students>
                // ))
              }

              {
                // students.length < 1 ? ("No data here,PLease Enter"): (
                //   students.map((student)=>(
                //     // console.log(student)
                //     <Students name={student.name} city={student.city} key={student.name}></Students>
                //   ))
                // )
              }

              {contentsection}


             

          </section>

          {/* <Students name = {students[0].name} city = {students[0].city} />
          <Students name = {students[1].name} city = {students[1].city} />
          <Students name = {students[2].name} city = {students[2].city} /> */}
          <Form addNewMember = {setnewMember}/>


      </div>
      
     
    
  );
}

export default App
