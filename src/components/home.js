import React, { Component } from 'react';

import './home.scss';

import Home from '../assets/home/home.webp';
import Learning from '../assets/home/learning.webp';
import Mentees from '../assets/home/mentees.webp';
import Recognised from '../assets/home/recognized.png';
import ScrollableAnchor from 'react-scrollable-anchor';
import BigLogo from '../assets/biglogo.webp';

import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';


import WorkshopComponent from './workshops/workshop';
import HowItWorksComponent from './howitworks/howitworks';
import CommunityComponent from './community/community';
import SuccessStoriesComponent from './successStories/successStories';

import {ToastContainer, ToastStore} from 'react-toasts';

const getCall = {
  name: '',
  phone: '',
  passion: ''
}
class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = getCall;
  }

  getACall(event){
    if(this.state.name && this.state.phone && this.state.passion)
    {
      fetch('https://joinmycap.herokuapp.com/getacall', {
         headers: {
                    'Content-Type': 'application/json'
                },
        method: 'POST',
        body: JSON.stringify(this.state)
      }).then(data => {
        data.status === 200 ? ToastStore.success("Will contact you soon",3000,'whiteColor') : ToastStore.error("Please check your input :(",3000,'whiteColor')
      })
    }
    else
    {
      ToastStore.error("Please check your input :(",3000,'whiteColor')
    }
    window.fbq('track', 'Contact', {
      content_name: 'Interested in passion',
      content_category: 'Home Page',
    })
  }

  onChange(name, event){
    this.setState({
      [name]: event.currentTarget.value
    })
  }
  render() {
    return (
      <div className="home">
      <ToastContainer store={ToastStore} position={ToastContainer.POSITION.TOP_CENTER}/>
        <div className="container">
          <Row>
            <Col sm="12" md="12" lg="6" className="homeImage1">
              <img src={Home} alt="Responsive image" className="img-fluid " />
            </Col>
            <Col sm="12" md="12" lg="6">
              <h1 className="header">
                Following your Passion
                <br /> just got easier!
              </h1>
              <h2 className="headerLine2">GET A CALL FROM OUR EXPERTS!</h2>
              <Form>
                <FormGroup>
                  <Input type="text" name="name" id="name" placeholder="Name" 
                       value={this.state.name}
                    onChange={this.onChange.bind(this, 'name')}/>
                </FormGroup>
                <FormGroup>
                  <Input
                    type="number"
                    name="Phone"
                    id="Phone"
                    placeholder="Phone"
                    value={this.state.phone}
                    onChange={this.onChange.bind(this, 'phone')}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="text"
                    name="Passion"
                    id="Passion"
                    placeholder="Passion"
                    value={this.state.passion}
                    onChange={this.onChange.bind(this, 'passion')}
                  />
                </FormGroup>
                <Button className="getCall" size="lg" block onClick={this.getACall.bind(this)}>
                  GET A CALL
                </Button>
              </Form>
            </Col>
            <Col sm="12" md="12" lg="6">
              <img
                src={Home}
                alt="Responsive image"
                className="homeImage img-fluid"
              />
            </Col>
          </Row>
        </div>

        <div className="container analysisContent">
          <Row class="RowAnalysis">
            <Col sm="12" md="12" lg="6" className="analysis">
              <Row>
                <Col sm="12" md="12" lg="1" />
                <Col sm="12" md="12" lg="4" className="text-center">
                  <img
                    src={Learning}
                    alt="Responsive image"
                    className="img-fluid analysisImage"
                  />
                </Col>
                <Col sm="12" md="12" lg="6">
                  <div className="analysis">
                    <span className="number">60,00,00+</span>
                    <br />
                    <span className="text"> HOURS OF LEARNING</span>
                  </div>
                </Col>
                <Col sm="12" md="12" lg="1" />
              </Row>
            </Col>
            <Col sm="12" md="12" lg="6"  className="analysis">
              <Row>
                <Col sm="12" md="12" lg="2" />
                <Col sm="12" md="12" lg="4" className="text-center">
                  <img
                    src={Mentees}
                    alt="Responsive image"
                    className="img-fluid analysisImage"
                  />
                </Col>
                <Col sm="12" md="12" lg="6">
                  <div className="analysis">
                    <span className="number">35000+</span>
                    <br />
                    <span className="text"> MENTEES</span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <div className="recognised container">
          <Row>
            <Col sm="12" md="12" lg="1" />
            <Col sm="12" md="12" lg="6" className="recognisedText">
              <h1>
                {' '}
                RECOGNISED BY THE UNITED NATIONS SDSN
              </h1>
              <p>
                For our contributions to the UN Sustainable Development Goals in
                education, we have been recognised by the United Nations SDSN as
                one of the top 50 Youth Led solutions in the world in their
                Report.
              </p>
              <Button className="getCall" size="lg" block>
                READ THE REPORT
              </Button>
            </Col>
            <Col sm="12" md="12" lg="1" />
            <Col sm="12" md="12" lg="3 text-center">
              <img
                src={Recognised}
                alt="Responsive image"
                className="img-fluid"
              />
            </Col>
          </Row>
        </div>

        <hr className="hr" />

       
          <HowItWorksComponent />

        <hr className="hr" />

        <WorkshopComponent />

        <hr className="hr" />
        <CommunityComponent />

        <hr className="hr" />
        <SuccessStoriesComponent />

        <hr className="hr" />
        <div className="howitworks text-center">
        <h1>Do you have what it takes to be a captain?</h1>
        <p className="Downloadlink"> Download the PDF to know more about the application process</p>
        <Button className="buttonLink" href="https://drive.google.com/file/d/0B62ZzHa9a5A-alptYmV6N21OOW8/view"> DOWNLOAD PDF</Button><br />
        <Button className="buttonLink" href="https://docs.google.com/forms/d/e/1FAIpQLSdb6wXSBzBj8P2m4R-bms4-P_dq3WVOFS3hI7UWSoaIyOotwA/viewform"> APPLY NOW </Button>
        </div>
          <section id="footer">
    <div>
      <div class="row text-center text-xs-center text-sm-left text-md-left">
        <div class="col-xs-12 col-sm-12 col-md-4">
         <img className="img-fluid" src={BigLogo} />
         <h6>© Copyright 2018 Climber Knowledge and Careers Pvt. Ltd.</h6>
           <ul class="list-unstyled list-inline social">
            <li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-facebook"></i></a></li>
            <li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-google-plus"></i></a></li>
            <li class="list-inline-item"><a href="javascript:void();" target="_blank"><i class="fa fa-envelope"></i></a></li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-2">
          <h5>ABOUT US</h5>
          <ul class="list-unstyled quick-links">
            <li><a href="javascript:void();">OUR TEAM</a></li>
            <li><a href="javascript:void();">CAREERS</a></li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-3">
          <h5>CONTACT US</h5>
          <ul class="list-unstyled quick-links">
            <li><a href="javascript:void();">CUSTOMER SUPPORT</a></li>
            <li><a href="javascript:void();">GENERAL ENQUIRY</a></li>
            <li><a href="javascript:void();">FAQS</a></li>
            <li><a href="javascript:void();">WORK WITH US</a></li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-3">
          <h5>LEGAL</h5>
          <ul class="list-unstyled quick-links">
            <li><a href="javascript:void();">PRIVACY POLICY</a></li>
            <li><a href="javascript:void();">TERMS & CONDITIONS</a></li>
            <li><a href="javascript:void();">DISCLAIMER</a></li>
          </ul>
        </div>
      </div> 
    </div>
  </section>
      </div>
    );
  }
}

export default HomeComponent;