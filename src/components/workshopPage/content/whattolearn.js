import React, { Component } from 'react';

import {Row, Col} from 'reactstrap'

class WhatToLearn extends Component {
  constructor(props)
  {
     super(props);
  }
  render() {
    const {data} = this.props;
    var list = [];
    data.whattolearn.forEach(item => {
      list.push(<Col sm="12" md="12" lg="6" key={item}>
                      <div className="list-group">
                        <a href="#" className="list-group-item">
                          <i className="fa fa-check" aria-hidden="true" />
                          {item}
                        </a>
                      </div>
                    </Col>)
    })
    return (
      <div className="whatYouLearn">
                  <Row>
                    {list}
                  </Row>
                </div>
    );
  }
}

export default WhatToLearn;