import React from 'react'; 
import ReactDOM from 'react-dom';
import Profile from './Components/Profile';
import { Container } from 'react-bootstrap';
import Button from './Components/button';


class App extends React.Component {
  state = {
    visibility: false
  };
  handleToggleVisibility = () => {
    this.setState(prevState => ({ visibility: !prevState.visibility }));
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Button
            visibility={this.state.visibility}
            handleToggleVisibility={this.handleToggleVisibility}
          />
          
         
        </header>
      </div>
    );
  }
}


export default App;