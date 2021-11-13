import React from 'react'; 
import ReactDOM from 'react-dom';
import Profile from './Profile';


class button extends React.Component {
    render() {
      return (
        <div>
          <button onClick={this.props.handleToggleVisibility}>
            {this.props.visibility ? "Hide profile" : "Show profile"}
          </button>
          {this.props.visibility && (
            <div>
              <p>
                 <Profile></Profile>
              </p>
            </div>
          )}
        </div>
      );
    }
  }
  
export default button;