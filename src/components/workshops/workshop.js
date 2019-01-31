import React from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Row,
  Col,
} from 'reactstrap';

import classnames from 'classnames';
import './workshop.scss';
import { withRouter } from "react-router-dom";

import workshopName from '../../assets/workshopNames';

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

class WorkshopComponent extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  routerPage(to) {
     window.fbq('track', 'Search', {
      content_name: to
    })
    this.props.history.push(`/workshop/${to.replace(/'/g, '')
                      .replace(/&/g, '')
                      .replace(/ /g, '')
                      .toLowerCase()}`);
  }
  render() {
    var cards = [];
    var i,
      j,
      temparray,
      chunk = 4;
    for (i = 0, j = workshopName.length; i < j; i += chunk) {
      temparray = workshopName.slice(i, i + chunk);
      var carddeck = [];

      temparray.map((value, index) => {
        carddeck.push(
            <Card className="workshopCard" key={index} onClick={this.routerPage.bind(this,value)}>
              <CardImg
                top
                width="100%"
                src={
                  images[
                    value
                      .replace(/'/g, '')
                      .replace(/&/g, '')
                      .replace(/ /g, '')
                      .toLowerCase() + '.png'
                  ]
                }
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>{value}</CardTitle>
              </CardBody>
            </Card>
        );
      });
      cards.push(<CardDeck key={i}>{carddeck}</CardDeck>);
    }

    return (
      <div className="workshop">
        <h1>WORKSHOPS</h1>
        <Nav tabs className="nav-justified">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => {
                this.toggle('1');
              }}
            >
              ALL WORKSHOPS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => {
                this.toggle('2');
              }}
            >
              CREATIVES AND HUMANITIES
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => {
                this.toggle('3');
              }}
            >
              TECHNOLOGY
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => {
                this.toggle('4');
              }}
            >
              BUSINESS AND MANAGEMENT
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1" className="container">
            {cards}
          </TabPane>
          <TabPane tabId="2" />
        </TabContent>
      </div>
    );
  }
}

export default withRouter(WorkshopComponent);