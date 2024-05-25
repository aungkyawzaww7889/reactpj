// import Card from "./Card";

const List = (props) => {
  return(
      <>

          {

          props.userInfos.length >0 ? (
            props.userInfos.map((info)=>{

              return ( 
                <div className="list"  key={info.email}>
                  <p>Name : {info.name}</p>
                  <p>City : {info.live}</p>
                  <p>Email : {info.email}</p>
                </div>
              );
            

            }) 
          ) : (
            <div className="list">
                <p className="text">"Add a new user right now! "</p>
                
            </div>)

          }
        
      </>
  

  );
};

export default List;




              