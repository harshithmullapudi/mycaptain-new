import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from 'reactstrap';

import './successStories.scss';

import Image1 from '../../assets/home/success/blog1.webp';
import Image2 from '../../assets/home/success/blog2.webp';
import Image3 from '../../assets/home/success/blog3.webp';

class SuccessStoriesComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="successStories">
        <h1>SUCCESS STORIES</h1>
        <div className="storyCards container">
          <Row>
            <Col sm="12" md="12" lg="4" className="successColumn">
              <Card className="text-center">
                <CardImg top width="100%" src={Image1} alt="Card image cap" />
                <CardBody>
                  <CardTitle>
                    Priya Bhowal,20, works with Publishing Houses now and is
                    writing her own Novel!
                  </CardTitle>
                  <CardText>
                    “From a city, at the foothills of the mighty Himalayas,
                    hails a young lady, with the magnificent power to influence
                    the majority”.
                  </CardText>
                  <Button href="https://blog.theclimber.in/priya-bhowal-20-works-with-publishing-houses-now-and-is-writing-her-own-novel-a05aa0cf4b98">READ MORE</Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" md="12" lg="4" className="successColumn">
              <Card className="text-center">
                <CardImg top width="100%" src={Image2} alt="Card image cap" />
                <CardBody>
                  <CardTitle>
                   Graphic Design mentee, Abdal from Kashmir gets into Symbiosis Institute of Design!
                  </CardTitle>
                  <CardText>
Had you asked him about his Career aspirations a year ago, Abdal Mehraj from the beauteous Valley of Kashmir would have told you he wanted to ...
                  </CardText>
                  <Button href="https://medium.com/@theclimber_ind/had-you-asked-him-about-his-career-aspirations-a-year-ago-abdal-mehraj-from-the-beauteous-valley-f3ddc49e5812">READ MORE</Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" md="12" lg="4" className="successColumn">
              <Card className="text-center">
                <CardImg top width="100%" src={Image3} alt="Card image cap" />
                <CardBody>
                  <CardTitle>
                   Ananyah Dhawan — A published author, in his teens!
                  </CardTitle>
                  <CardText>
Nothing in the world can give a writer more happiness than seeing a book written by them lie right next to the book of the author they love!
                  </CardText>
                  <Button href="https://medium.com/@theclimber_ind/from-being-a-mentee-in-a-writing-workshop-to-becoming-an-author-the-story-of-ananyah-dhawan-5cfd6e7d047e">READ MORE</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default SuccessStoriesComponent;