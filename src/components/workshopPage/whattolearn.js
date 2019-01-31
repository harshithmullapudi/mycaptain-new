import React, { Component } from 'react';

import {Row, Col} from 'reactstrap'

class WhatToLearn extends Component {
  constructor(props)
  {
     super(props);
  }
  render() {
    return (
      <div className="whatYouLearn">
                  <Row>
                    <Col sm="12" md="12" lg="6">
                      <div class="list-group">
                        <a href="#" class="list-group-item">
                          <i class="fa fa-check" aria-hidden="true" />
                          Introduction to Media Studies and Journalism.
                        </a>
                      </div>
                    </Col>
                    <Col sm="12" md="12" lg="6">
                      <div class="list-group">
                        <a href="#" class="list-group-item">
                          <i class="fa fa-check" aria-hidden="true" />
                          Introduction to Media Studies and Journalism.
                        </a>
                      </div>
                    </Col>
                    <Col sm="12" md="12" lg="6">
                      <div class="list-group">
                        <a href="#" class="list-group-item">
                          <i class="fa fa-check" aria-hidden="true" />
                          Introduction to Media Studies and Journalism.
                        </a>
                      </div>
                    </Col>
                    <Col sm="12" md="12" lg="6">
                      <div class="list-group">
                        <a href="#" class="list-group-item">
                          <i class="fa fa-check" aria-hidden="true" />
                          Introduction to Media Studies and Journalism.
                        </a>
                      </div>
                    </Col>
                  </Row>
                </div>
    );
  }
}

export default WhatToLearn;