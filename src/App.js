import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Aux from "../src/hoc/Auxiliary";
import Ganteng from "../src/components/Mirza";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import Axios from "../node_modules/axios";

const style = {
  backgroundColor: "red"
};

class App extends Component {
  state = {
    data1: "Data Componen 1 1",
    data2: "Data Componen 1 2",
    data3: "Data Componen 1 3",
    dataA: "ini data A",
    dataB: "ini data B",
    data: [],
    loading: false
  };
  state2 = {
    file1: "Data Componen 2 1",
    file2: "Data Componen 2 2",
    file3: "Data Componen 2 3"
  };

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/comments").then(
      response => {
        // console.log(response);
        this.setState({
          data: response.data,
          loading: true
        });
      }
    );
  }

  render() {
    return (
      <div className="App">
        {this.state.loading ? (
          this.state.data.map(key => {
            return <p>{key.name}</p>;
          })
        ) : (
          <h1>Loading......</h1>
        )}
        {/* <Component1
          var1={this.state.data1}
          var2={this.state.data2}
          var3={this.state.data3}
        />
        <Component2
          file1={this.state2.file1}
          file2={this.state2.file2}
          file3={this.state2.file3}
        />
        <ComponentA dataA={this.state.dataA} />
        <ComponentB dataB={this.state.dataB} /> */}
      </div>
    );
  }
}

export default App;
