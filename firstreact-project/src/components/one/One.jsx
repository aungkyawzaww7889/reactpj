import "./One.css";

function One(props){

    // let name = "code hub";
    let cal = ["code","hub","code"];
    let a = 23; 
    let b = 30;

    
    return(
        <>

            <h1 className="paragraph">{props.name}</h1>
            <h1 className="paragraph">{cal}{props.name}</h1>
            <span>{a+b} and {props.calculates}</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, adipisci ab? Optio consequuntur iusto beatae voluptatem laboriosam. Natus quibusdam nam ipsa voluptatum. Ut, placeat voluptatum est quae libero animi. Accusamus?</p>
            
        
        </>
    );
}

export default One;