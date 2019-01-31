import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import './captain.scss';

class CaptainComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    var captains = [];
    data.captains.map((value, index) => {
      const image  = require(`../../../assets/Captains/${value.image}`)
      captains.push(
        <Row key={index} className="rowImages">
          <Col sm="12" md="12" lg="4" className="text-center">
           <img
                src={image}
                alt="Responsive image"
                className="img-fluid captainImages"
              />
          </Col>
          <Col sm="12" md="12" lg="8">
            <h2 className="captainHeading name"> {value.name} </h2>
            <p className="captainContent">
              {value.content}
            </p>
          </Col>
        </Row>
      );
    });
    return (
      <Row>
        <Col sm="12" md="12" lg="8">
          <h2 className="captainHeading"> YOUR CAPTAINS: </h2>
          {captains}
        </Col>
      </Row>
    );
  }
}

export default CaptainComponent;