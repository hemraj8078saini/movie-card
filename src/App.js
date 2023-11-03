import "./App.css";
// import Cards from "./components/Cards";
import Card1 from "./components/Card1"
import Navs from "./components/Navs";
import sdata from "./components/Data";
// import { Card } from "react-bootstrap";
import Fetch from "./components/Fetch";

function App() {
  const ncard = (val) => {
    return (
    
      <div className="col-md-3 mt-3px">

        <Card1
          imgsrc={val.imgsrc}
          title={val.title}
          description={val.description}
        />
      </div>
      
    );
  };

  return (
    <div className="container">
      <div className=" row">
        <Navs />
        <Fetch/>
       
      {sdata.map(ncard)}
      </div>
    </div>
  );
}

export default App;

// <Card1
//             imgsrc={sdata[0].imgsrc}
//             title={sdata[0].title}
//             description={sdata[0].description}
//           />
//         </div>
//         <div className="col-md-3 mt-3px">
//           <Card1
//             imgsrc={sdata[0].imgsrc}
//             title={sdata[0].title}
//             description={sdata[0].description}
//           />
