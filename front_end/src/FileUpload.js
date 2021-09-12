import React, { Component } from "react";
import "./App.css";
import {
  FlexibleXYPlot,
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
} from "react-vis";

function UploadForm() {
  return (
    <div className="UploadForm">
      <h1>Batch processing</h1>
      <FormBatch />
    </div>
  );
}

export default UploadForm;

const processData = data => {
  return data.map(e => ({
    x: parseInt(e.name),
    y: e.value
  }));
};

class FormBatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectFile: null,
      output: false,
      respFromServer: null,
      resultArrayDTC: null,
      resultArrayDTS: null,
      ifDataProcessed: false
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.renderPlot = this.renderPlot.bind(this);
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
    var result = response2.result.result;
    var data_dtc = [];
    var data_dts = [];
    Object.keys(result).forEach(key =>
      data_dtc.push({ name: key, value: result[key].DTC })
    );
    Object.keys(result).forEach(key =>
      data_dts.push({ name: key, value: result[key].DTS })
    );
    var array_dtc = processData(data_dtc);
    var array_dts = processData(data_dts);
    this.setState({ resultArrayDTC: array_dtc });
    this.setState({ resultArrayDTS: array_dts });
    this.setState({ ifDataProcessed: true });
    console.log("Prediction Completed!");
  };
  renderPlot(event) {
    //event.preventDefault();
    console.log(event.target.value);
    var arr = [];
    arr = this.state.resultArrayDTC;
    console.log(arr);
    <div>
      <XYPlot height={300} width={300}>
        <XAxis />
        <YAxis />
        <HorizontalGridLines />
        <VerticalGridLines />
        <LineSeries data={arr} />
      </XYPlot>
    </div>;
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleUpload}>
          <input
            type="file"
            name="selectFile"
            onChange={this.handleFile}
          ></input>
          <input type="submit" value="Predict"></input>
        </form>
        <br />
        <h3>DTC Plot</h3>
        <plot>
          <XYPlot height={200} width={1200}>
            <XAxis />
            <YAxis />
            <HorizontalGridLines />
            <VerticalGridLines />
            <LineSeries
              data={this.state.resultArrayDTC}
              style={{ strokeWidth: 2 }}
            />
          </XYPlot>
        </plot>
        <br />
        <h3>DTS Plot</h3>
        <plot>
          <XYPlot height={200} width={1200}>
            <XAxis />
            <YAxis />
            <HorizontalGridLines />
            <VerticalGridLines />
            <LineSeries
              data={this.state.resultArrayDTS}
              style={{ strokeWidth: 2 }}
            />
          </XYPlot>
        </plot>
      </div>
    );
  }
}
