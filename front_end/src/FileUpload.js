import React, { Component } from "react";
import "./App.css";

function UploadForm() {
  return (
    <div className="UploadForm">
      <h1>Batch processing</h1>
      <FormBatch />
    </div>
  );
}

export default UploadForm;

class FormBatch extends Component {
  constructor(props) {
    super(props);
    this.state = { selectFile: null, output: false, respFromServer: null };
    this.handleFile = this.handleFile.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleFile(event) {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.files[0] });
  }

  handleUpload = async event => {
    event.preventDefault();
    const url = "http://127.0.0.1:8000/model/";
    const fileUp = this.state.selectFile;
    console.log(fileUp);
    var formData = new FormData();
    formData.append(
      "filePath",
      this.state.selectFile,
      this.state.selectFile.name
    );
    const requestOptions = { method: "POST", body: formData };
    const response = await fetch(url, requestOptions);
    const response2 = await response.json();
    this.setState({ output: true });
    this.setState({ respFromServer: response2.result });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleUpload}>
          <input
            type="file"
            name="selectFile"
            onChange={this.handleFile}
          ></input>
          <input type="submit" value="Proceed"></input>
        </form>
        <div>{this.state.respFromServer}</div>
      </div>
    );
  }
}
