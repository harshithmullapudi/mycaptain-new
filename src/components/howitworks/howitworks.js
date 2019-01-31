import React, { Component } from 'react';
import 
{
  Row,
  Col
} from 'reactstrap';
import Work1 from '../../assets/home/work/1.webp'; 
import Work2 from '../../assets/home/work/2.webp'; 
import Work3 from '../../assets/home/work/3.webp'; 
import Work4 from '../../assets/home/work/4.webp';
import ScrollableAnchor from 'react-scrollable-anchor';

import './howitworks.scss'

class HowItWorksComponent extends Component {
  constructor(props)
  {
     super(props);
  }
  render() {
    return (
       <ScrollableAnchor id={'howitworks'}>
        <div className="howitworks container">
          <h1>HOW IT WORKS</h1>
          <Row className="text-center">
            <Col sm="12" md="12" lg="2">
            <img
                src={Work1}
                alt="Responsive image"
                className="img-fluid workImages"
              />
            </Col>
            <Col sm="12" md="12" lg="3">
              <h3 className="workText">GET YOUR OWN CAPTAIN</h3>
              <p className="workPara">
              We will connect you to your personal mentor (Captain) who will not only guide you in your passion but will also help you take your first steps to pursue it!
              </p>
            </Col>
            <Col sm="12" md="12" lg="1" />
             <Col sm="12" md="12" lg="2">
            <img
                src={Work2}
                alt="Responsive image"
                className="img-fluid workImages"
              />
            </Col>
            <Col sm="12" md="12" lg="3">
              <h3 className="workText">ONLINE WORKSHOP</h3>
              <p className="workPara">
        Video courses can get boring. Work with your Captain to build projects and take practical steps. Get live feedback at every point from your Captain!

              </p>
            </Col>
          </Row>
            <Row className="text-center">
            <Col sm="12" md="12" lg="2">
            <img
                src={Work3}
                alt="Responsive image"
                className="img-fluid workImages"
              />
            </Col>
            <Col sm="12" md="12" lg="3">
              <h3 className="workText">LEARN ON THE GO</h3>
              <p className="workPara">
 Your Captain will curate a 30 day Online Workshop just for you. Learn from the MyCaptain app while in Class, in the bus, or even from home
    </p>
            </Col>
            <Col sm="12" md="12" lg="1" />
             <Col sm="12" md="12" lg="2">
            <img
                src={Work4}
                alt="Responsive image"
                className="img-fluid workImages"
              />
            </Col>
            <Col sm="12" md="12" lg="3">
              <h3 className="workText">MEET LIKE MINDED PEOPLE</h3>
              <p className="workPara">
 Join the MyCaptain community and get internship opportunities, and stay connected with like minded individuals from all across India!   </p>
            </Col>
          </Row>
        </div>
        </ScrollableAnchor>
    );
  }
}

export default HowItWorksComponent;