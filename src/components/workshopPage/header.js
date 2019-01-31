import React, { Component } from 'react';
import {Row, Col} from 'reactstrap'
import './header.scss';

import style from '../../assets/style';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importAll(
  require.context('../../assets/icons', false, /\.(png|jpe?g|svg)$/)
);

class CourseHeader extends Component {
  constructor(props)
  {
     super(props);
  }
  viewContent(event)
  {
    const {data}  = this.props;
    window.fbq('track', 'ViewContent', {
      content_name: data.name
    })
  }
  render() {
    const {data} = this.props;
      const background = style[data.category.replace(/&/g,'').replace(/ /g,'').toLowerCase()].background;
      const color = style[data.category.replace(/&/g,'').replace(/ /g,'').toLowerCase()].button;
    return (
    
     <div className="workshopHeader" style={{backgroundColor: background}}>
          <Row className="container">
            <Col sm="12" md="12" lg="6" className="my-auto">
              <h2 className="workshopName"> {data.name} </h2>
              <p className="workshopShortDescription">
               {data.content}
              </p>
              <p>
                Price: ₹{data.price} <a className="joinnow" href="#form" style={{backgroundColor: color}} onClick={this.viewContent.bind(this)}>JOIN NOW</a>
              </p>
            </Col>
            <Col sm="12" md="12" lg="6" className="text-center">
              {data.video ? <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src={data.video}
                  allowfullscreen
                />
              </div> :  <img
                src={images[ data.name
                      .replace(/'/g, '')
                      .replace(/&/g, '')
                      .replace(/ /g, '')
                      .toLowerCase() + '.png']}
                alt="Responsive image"
                className="img-fluid"
              />}
            </Col>
          </Row>
        </div>
    );
  }
}

export default CourseHeader;