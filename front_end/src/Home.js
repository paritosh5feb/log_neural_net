import React, { Component } from "react";
import "./App.css";

function Home() {
  return (
    <div className="Home">
      <JsonForm />
    </div>
  );
}

export default Home;

class JsonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CAL: 0,
      CNC: 0,
      GR: 0,
      HRD: 0,
      HRM: 0,
      PE: 0,
      ZDEN: 0,
      DTC: 0,
      DTS: 0,
      SONIC: 0
    };
    this.loadAndPreview = this.loadAndPreview.bind(this);
    this.predictLog = this.predictLog.bind(this);
    this.predictInBacth = this.predictInBacth.bind(this);
  }
  loadAndPreview(event) {
    //console.log(event.target.name + " " + event.target.value);
  }

  predictLog(event) {
    //console.log(event.target.name + " " + event.target.value);
    //this.setState();
    event.preventDefault();
    this.setState({ [this.state.SONIC]: 10 });
    const url = "http://127.0.0.1:8000/model";
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      CAL: 0,
      CNC: 0,
      GR: 0,
      HRD: 0,
      HRM: 0,
      PE: 0,
      ZDEN: 0,
      DTC: 0,
      DTS: 0,
      SONIC: 0
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    fetch(url, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log("error", error));
  }

  predictInBacth(event) {}
  render() {
    return (
      <div>
        <form>
          <table>
            <tbody>
              <tr>
                <td>CAL</td>
                <td>
                  <input
                    type="text"
                    value={this.state.CAL}
                    onChange={this.handleChange}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>CNC</td>
                <td>
                  <input
                    type="text"
                    value={this.state.CNC}
                    onChange={this.handleChange}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>GR</td>
                <td>
                  <input
                    type="text"
                    value={this.state.GR}
                    onChange={this.handleChange}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>HRD</td>
                <td>
                  <input
                    type="text"
                    value={this.state.HRD}
                    onChange={this.handleChange}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>HRM</td>
                <td>
                  <input
                    type="text"
                    value={this.state.HRM}
                    onChange={this.handleChange}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>PE</td>
                <td>
                  <input
                    type="text"
                    value={this.state.PE}
                    onChange={this.handleChange}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>ZDEN</td>
                <td>
                  <input
                    type="text"
                    value={this.state.ZDEN}
                    onChange={this.handleChange}
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
          <input
            type="button"
            value="Load Data and Pre-view"
            onClick={this.loadAndPreview}
          ></input>
          <input type="button" value="Predict"></input>
          <input type="button" value="Predict in a Batch"></input>
        </form>
        <div>Sonic {this.state.SONIC}</div>
      </div>
    );
  }
}
