import React from "react";
import "./style.css";

function CityCard(props) {
  return (
    <div className="card">
      {/* <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div> */}
      <div className="content">
        <h6><strong>City Safety Rating</strong></h6>
        <ul>
          <li>
            <strong>City Name:</strong> {props.name}
          </li>
          <li>
            <strong>Overall:</strong> {props.overall}
          </li>
          <li>
            <strong>Medical:</strong> {props.medical}
          </li>
          <li>
            <strong>Women:</strong> {props.women}
          </li>
          <li>
            <strong>Lgbtq:</strong> {props.lgbtq}
          </li>
          <li>
            <strong>Physical Harm:</strong> {props.physicalHarm}
          </li>
          <li>
            <strong>Political Freedom:</strong> {props.politicalFreedom}
          </li>
          <li>
            <strong>Theft:</strong> {props.theft}
          </li>
        </ul>
      </div>
      {props.button && <span onClick={() => props.removeCity(props.id)} className="remove">
      </span>}
      𝘅
    </div>
  );
}

export default CityCard;
