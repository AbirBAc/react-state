import React from 'react'; 
import ReactDOM from 'react-dom';
import Image from './Image.jpg';



class Profile extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {
            Fullname: ["Abir Baccouch", false],
            Bio: ["rien ici", false],
            Profession: ["rien ici", false],
            Image: ["Image" , false],
        };
      }
render() { 
        return(
        <>
        <div>
          
              <h1>Fullname :{this.state.Fullname}</h1>              
              <h1>Bio: {this.state.Bio}</h1>
              <h1>Profession: {this.state.Profession}</h1>
              <h1>Image : {this.state.Image}</h1>
              <img src={Image} />
          </div>
          
          
        
        </>
      )
        }
      } 
export default Profile;