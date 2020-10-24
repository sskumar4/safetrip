import React from "react";
import "./style.css";


function InfoCard(props) {

  return (
    <div className="card1">
      <div className="img-container1">
      <h6><strong>Safety Score Legend</strong></h6>
      </div>
      <div className="content1 d-flex flex-wrap justify-content-around">
        <ul >
          <li >
            <strong>Overall:</strong> 1-very safe,  100-very dangerous
          </li>
          <li>
            <strong>Medical:</strong> Likelihood of illness or disease: 1-not likely, 100-very likley
          </li>
          <li>
            <strong>Women:</strong> Likelihood of inappropriate behavior: 1-not likely, 100-very likley
          </li>
          <li>
            <strong>Lgbtq:</strong> Likelihood of harm or discrimination against LGBTQ persons: 1-not likely, 100-very likley
          </li>
          <li>
            <strong>Physical Harm:</strong> Likelihood of injury due to harmful intent: 1-not likely, 100-very likley
          </li>
          <li>
            <strong>Political Freedom:</strong> Political unrest: 1 (not likely) to 100 (very likely)
          </li>
          <li>
            <strong>Theft:</strong> 1 (not likely) to 100 (very likely)
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InfoCard;
