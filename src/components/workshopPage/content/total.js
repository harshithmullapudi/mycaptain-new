import React, { Component } from 'react';
import {Row, Col} from 'reactstrap'
import './total.scss'

import WhatToLearn from './whattolearn';
import Course from './course';
import FormComponent from './form';

class TotalContent extends Component {
  constructor(props)
  {
     super(props);
  }
  render() {
    const {data} = this.props;
    return (
     <Row>
              <Col sm="12" md="12" lg="8">
                <h2 className="contentCourseHeading"> WHAT YOU'LL LEARN: </h2>
               
                <WhatToLearn data={data}/>
                <h2 className="contentCourse"> COURSE CONTENT </h2>
                 <Course data={data}/> 
              </Col>
              <Col sm="12" md="12" lg="4">
                <FormComponent data={data}/>
              </Col>
            </Row>
    );
  }
}

export default TotalContent;