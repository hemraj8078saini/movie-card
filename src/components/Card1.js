import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './Card1.css';

// const handleclick = () => {
//   const [count,setCount]=useState(0)
//   console.log("botton is clicked");
// };
function Card1({imgsrc,title,description}) {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count+1)
    
    
  };
  const remove=()=>{
    if(count>=1)
    setCount(count-1)
  }
  

  return (
    <div className="imgcad">
      <Card   style={{maxHeight:300, overflow: "auto" }}className="cardsd">
        <Card.Img style={{maxHeight:350, overflow: "auto" }} variant="top" src={imgsrc} />
        <Card.Body >
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button  style={{ marginRight:10}}onClick={add} variant="primary">
            +
          </Button>{count}
          <Button  style={{marginLeft:4}}onClick={remove} variant="primary">
            -
          </Button>
          
         
        </Card.Body>
      </Card>
    </div>
  );

  }
export default Card1;
