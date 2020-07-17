import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import MyWork from "./components/MyWork";
import Software from "./components/Software";
import Default from "./components/Default";
import "./App.css";

class App extends Component {
  state = {
    changeColor: "white"
  }

  changeColor = color => {
    this.setState({ color });
  };
  render() {
    return (
      <div className="App" style={{ color: this.state.color}}>
        
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MyWork} />
            <Route path="/software" component={Software} onClick={() => this.changeColor("black")}/>
            <Route component={Default} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
