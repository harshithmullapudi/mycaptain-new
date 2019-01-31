import React, { Component } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import classnames from 'classnames';
import ScrollableAnchor from 'react-scrollable-anchor';
import { goToAnchor, goToTop } from 'react-scrollable-anchor';


import CourseHeader from './header'
import TotalContent from './content/total'
import CaptainComponent from './captain/captain'
import FeedComponent from './feed/feed'
import HowItWorksComponent from '../howitworks/howitworks'
import FaqComponent from './faq/faq'

import './workshopMain.scss';


import workshopData from '../../assets/workshop.json'

class WorkshopMainComponent extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      data: null
    };
    this.state.data = workshopData[this.props.match.params.name] ? workshopData[this.props.match.params.name] : null;
  }

  componentDidMount(){
    goToTop();
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
      goToAnchor(tab, false);
    }
  }
  render() {
    const { data }  = this.state;
    return (
      data ? (
      <div>
        <hr className="hr noTop" />
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="#">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#">{data.category}</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>{data.name.toLowerCase()}</BreadcrumbItem>
        </Breadcrumb>

        <CourseHeader data={data}/>

        <Nav tabs className="nav-justified">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => {
                this.toggle('1');
              }}
            >
              COURSE STRUCTURE
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => {
                this.toggle('2');
              }}
            >
              THE CAPTAIN
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => {
                this.toggle('3');
              }}
            >
              HOW IT WORKS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => {
                this.toggle('4');
              }}
            >
              REVIEWS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => {
                this.toggle('4');
              }}
            >
              FAQS
            </NavLink>
          </NavItem>
        </Nav>

        <ScrollableAnchor id={'1'}>
          <div className="container content">
            <TotalContent data={data}/>
          </div>
        </ScrollableAnchor>
         <hr className="hr" />
        <ScrollableAnchor id={'2'}>
          <div className="container content">
           <CaptainComponent data={data}/>
          </div>
        </ScrollableAnchor>
         <hr className="hr" />
        <ScrollableAnchor id={'3'}>
          <div className="container content">
            <HowItWorksComponent />
          </div>
        </ScrollableAnchor>
         <hr className="hr" />
        <ScrollableAnchor id={'4'}>
          <div className="container content">
            <FeedComponent data={data}/>
          </div>
        </ScrollableAnchor>
         <hr className="hr" />
        <ScrollableAnchor id={'5'}>
          <div className="container content">
            <h2 className="contentCourse"> FAQ's: </h2>
            <FaqComponent />
          </div>
        </ScrollableAnchor>
      </div>) : ''
    );
  }
}

export default WorkshopMainComponent;