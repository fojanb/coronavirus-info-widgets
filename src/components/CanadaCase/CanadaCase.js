import React, { Component } from "react";
import "./CanadaCase.css";
class CanadaCase extends Component {
  render() {
    let data = this.props.covidData;
    const totalCases = data["Total Cases_text"];
    const deaths = data["Total Deaths_text"];
    const totalRecovered = data["Total Recovered_text"];
    const activeCases = data["Active Cases_text"];
    const updateDate = data ["Last Update"];
    // **************
    return (
      <div>
        <div className="status">
          <div id="totalCases">Total Cases : {totalCases}</div>
          <div id="deathCases">Deaths : {deaths}</div>
          <div id="recoveredCases">Recovered : {totalRecovered}</div>
        </div>

        <div className="cardHolder">
          <div className="cases">
            <h5>ACTIVE CASES</h5>
            <p>{activeCases}</p>
          </div>
          <div className="cases">
            <h5>CLOSED CASES</h5>
            <p>Recovered : {totalRecovered}</p>
            <p>Deaths : {deaths}</p>
          </div>
        </div>
        <div id="updateDate">Last Update : {updateDate}</div>
      </div>
    );
  }
}
export default CanadaCase;
