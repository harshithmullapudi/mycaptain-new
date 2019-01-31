import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import './feed.scss';

class FeedComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    var feed = [];
    data.feed.map((value, index) => {
       const image  = require(`../../../assets/testimonials/${value.image}`)
      feed.push(
        <div>
          <Row className="rowImages">
            <Col sm="12" md="12" lg="2">
           <img
                src={image}
                alt="Responsive image"
                className="img-fluid feedImages"
              />
          </Col>
            <Col sm="12" md="12" lg="8">
              <p className="feedContent">{value.content}</p>
               <p className="nameFeed"> {value.name}</p>
            </Col>
          </Row>
         
        </div>
      );
    });
    return (
      <Row>
        <Col sm="12" md="12" lg="12">
          <h2 className="feedHeading"> WHAT OTHERS HAVE TO SAY: </h2>

          {feed}
        </Col>
      </Row>
    );
  }
}

export default FeedComponent;