// The API documentation :
// https://rapidapi.com/slotixsro-slotixsro-default/api/covid-19-tracking
import React, { Component } from "react";
import CanadaCase from "../components/CanadaCase/CanadaCase";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
    };
  }
  componentDidMount() {
    // Get all entities - GET
    console.log("[App.js] : componentDidMount");
    this.fetchData();
  }

  fetchData = async () => {
    let response = await fetch(
      "https://covid-19-tracking.p.rapidapi.com/v1/canada",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "75325a75d7msh22965905224246cp10c127jsn6f0689d468fd",
          "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com",
        },
      }
    );
    let data = await response.json();
    // console.log("data",data);
    // const Country_text  = data["Country_text"];
    // const Total_Recovered_text = data["Total Recovered_text"];
    // console.log(Total_Recovered_text)
    // console.log(Country_text);

    // Now update the state :
    this.setState({ Data: data });
  };

  // ------------------------------
  render() {
    return (
      <div className="App">
        <div className="widgetHeader">
          <img
            class="flag-img"
            src="https://covid-19.dataflowkit.com/assets/widget/flags/ca.svg"
            alt="Canada"
            width="50px"
            height="20px"
          ></img>
          <h3 style={{color:'#f1faee'}}>Canada</h3>
        </div>

        <CanadaCase covidData={this.state.Data}></CanadaCase>
      </div>
    );
  }
}

export default App;
