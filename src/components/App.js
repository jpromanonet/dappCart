import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="https://nucba.com.ar"
            target="_blank"
            rel="noopener noreferrer"
          >
           Nucba Marketplace
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                  <img src="https://cdn.discordapp.com/attachments/891131523468771408/894749018301825054/Mesa_de_trabajo_118.png" width="100px" height="100px" className="App-logo" alt="logo" />
                <h1>Nucba Marketplace</h1>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
