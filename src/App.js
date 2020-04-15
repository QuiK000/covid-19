import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const API = 'https://api.covid19api.com/total/country/Ukraine';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      death: []
    };
  }

  componentWillMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => 
        this.setState({
          death: data
        }
      )
    )
  }

  render() {
    const { death } = this.state;
    console.log(this.state.death);
    return (
      <div className="App">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo"></img>
        </div>
        <div>
          {death.map((died, index) => 
            <div key={index}> 
              <div>
                <h2>Total died + {died.Deaths}</h2>
                <h2>Confirmed + {died.Confirmed}</h2>
              </div>
            </div>  
          )}
        </div>
      </div>
    );
  }
}
