
import './App.css';
import Profil from "./Profil/Profil";
import photo from "./image.jpg"
// import PropTypes from "prop-types";

function App() {
  var fullName ="Imen BEN DHIAB";
  var bio ="aaa";
  var profession ="Developpeur Web";

  const handleName=(x)=>{
    
          alert (x)             
  }
  
  return (
    <div className="App">
      <Profil fname={fullName} bio={bio} prof={profession} handleName={handleName}>{photo}</Profil>
    </div>
  );
} 

export default App;
