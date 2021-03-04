import PropTypes from "prop-types";

const Profil=(props)=>{
    
  return (
    <div className="App">

      
      <h1> {props.fname}</h1>
      <h1> {props.bio}</h1>
      <h1> {props.prof}</h1>
     
      <img style={{width:'200px'}} src={props.children} alt="" ></img>
      {/* <button onClick ={()=>}>alert</button> */}
      {props.handleName(props.fname)}
      {/* {console.log(typeof props.handleName)} */}
      {/* {props.handleName(props.fname)} */}
      

    </div>
  );
}
Profil.propTypes = {
  fname: PropTypes.string,
  bio:PropTypes.string,
  prof: PropTypes.string,
  handleName: PropTypes.func,
};
export default Profil;