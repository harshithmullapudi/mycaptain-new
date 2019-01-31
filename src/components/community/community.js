import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';

import Internship from '../../assets/home/internship.webp'
import Events from '../../assets/home/events.webp'
import MasterClass from '../../assets/home/masterclass.webp'

import Zishaan from '../../assets/home/people/1zishaan.webp'
import Ritesh from '../../assets/home/people/2ritesh.webp'
import Manu from '../../assets/home/people/3manu.webp'
import Harinidh from '../../assets/home/people/4harinidh.webp'
import Anuj from '../../assets/home/people/5anuj.webp'

import './community.scss';

class CommunityComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="community container">
      <h1>JOIN OUR COMMUNITY</h1>
      <Row>
     
        <Col sm="12" md="12" lg="4" className="column text-center">
        <div className="inside">
          <img
                src={Internship}
                alt="Responsive image"
                className="img-fluid workImages"
              />
          <h3>INTERNSHIP OPPORTUNITIES</h3>
          <p>  
            Stay updated about <br />Internship opportunities and <br />get real time experience in <br /> your field of passion.
          </p>
          </div>
        </Col>
        <Col sm="12" md="12" lg="4" className="column text-center">
        <div className="inside">
          <img
                src={MasterClass}
                alt="Responsive image"
                className="img-fluid workImages"
              />
          <h3>CELEBRITY MASTERCLASS</h3>
          <p>  
           Get live video masterclass<br /> sessions with influencers, <br /> celebrities and industry experts <br /> in your field of passion.
          </p>
          </div>
        </Col>
         <Col sm="12" md="12" lg="4" className="column text-center">
         <div className="inside">
          <img
                src={Events}
                alt="Responsive image"
                className="img-fluid workImages"
              />
          <h3>STAY UPDATED WITH EVENTS</h3>
          <p>  
          We conduct offline events  all <br /> across India in your field of <br /> Passion. Get free and <br />discounted access to all our Events!
          </p>
          </div>
        </Col>
      </Row>






      <div className="interact">
      <h4>JOIN MYCAPTAIN TO INTERACT WITH TOP INDUSTRY LEADERS!</h4>
        <Row>
         <Col sm="12" md="12" lg="1" className="column text-center" />
          <Col sm="12" md="12" lg="2" className="text-center">
            <img
                src={Zishaan}
                alt="Responsive image"
                className="img-fluid workImages interactImage"
              />
             <h3>ZISHAAN HAYATH</h3>
          <p>  
          Founder, Toppr & Investor in 17 companies including Ola Cabs and Housing.com
          </p>  
          </Col>
          <Col sm="12" md="12" lg="2" className="text-center">
            <img
                src={Ritesh}
                alt="Responsive image"
                className="img-fluid workImages interactImage"
              />
             <h3>RITESH MALIK</h3>
          <p>  
          Founder, Innov8 Co-working Spaces Forbes 30 under 30
          </p>  
          </Col>
          <Col sm="12" md="12" lg="2" className="text-center">
            <img
                src={Manu}
                alt="Responsive image"
                className="img-fluid workImages interactImage"
              />
             <h3>MANU PILLAI</h3>
          <p>  
         Author, Chief of Staff to Dr. Shashi Tharoor
          </p>  
          </Col>
          <Col sm="12" md="12" lg="2" className="text-center">
            <img
                src={Harinidh}
                alt="Responsive image"
                className="img-fluid workImages interactImage"
              />
             <h3>HARNIDH KAUR</h3>
          <p>  
          Poet, Author, The Ease of Forgetting & The Inability of Words
          </p>  
          </Col>
          <Col sm="12" md="12" lg="2" className="text-center">
            <img
                src={Anuj}
                alt="Responsive image"
                className="img-fluid workImages interactImage"
              />
             <h3>ANUJ GOSALIA</h3>
          <p>  
          Co-founder & CEO, Terribly Tiny Tales
          </p>  
          </Col>
        </Row>
      </div>
      </div>
    );
  }
}

export default CommunityComponent;