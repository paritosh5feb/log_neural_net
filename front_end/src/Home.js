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
    this.state = { pre_view_data: "YES" };
  }
  handleEvent(event) {
    console.log(event.target.name + " " + event.target.value);
    //this.setState();
  }
  render() {
    return (
      <div>
        <form>
          <input type="radio" name="pre_view_data" id="rb1" value="YES"></input>
          <label for="rb1">YES</label>
          <br />
          <input type="radio" name="pre_view_data" id="rb2" value="NO"></input>
          <label for="rb1">NO</label>
          <br />
          <input
            type="button"
            value="Pre-view-data"
            onClick={this.handleEvent}
          ></input>
        </form>
      </div>
    );
  }
}
