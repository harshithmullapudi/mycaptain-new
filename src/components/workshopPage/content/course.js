import 'rc-collapse/assets/index.css';
import Collapse, { Panel } from 'rc-collapse';
import React from 'react';
import ReactDOM from 'react-dom';

import './course.scss'

function random() {
  return parseInt(Math.random() * 10, 10) + 1;
}

function expandIcon({ isActive }) {
  return (

    <i class="fas fa-angle-up"
 style={{
          verticalAlign: '-.125em',
          transition: 'transform .2s',
          transform: `rotate(${isActive ? 0 : 180}deg)`,
        }}
    ></i>
  );
}

class Course extends React.Component {
  state = {
    time: random(),
    accordion: false,
    activeKey: ['0'],
  }

  onChange = (activeKey) => {
    const {data} = this.props;
    window.fbq('track', 'ViewContent', {
      content_name: data.name
    })
    this.setState({
      activeKey,
    });
  }

  getItems() {
    const items = [];
    const {data} = this.props;
    for (let i = 0, len = data.course.length; i < len; i++) {
      const key = i + 1;
      var sections = [];
      var j = 0;
      data.course[i].content.forEach(section => {
        sections.push(
          <p key={j}>{`Section ${j+1}: ${section}`}</p>
          )
        j = j + 1;
      })
      items.push(
        <Panel header={data.course[i].name} key={key}>
          <p>{sections}</p>
        </Panel>
      );
    }


    return items;
  }

  setActivityKey = () => {
    this.setState({
      activeKey: ['2'],
    });
  }

  toggle = () => {
    this.setState({
      accordion: !this.state.accordion,
    });
  }

  reRender = () => {
    this.setState({
      time: random(),
    });
  }

  render() {
    const accordion = this.state.accordion;
    const btn = accordion ? 'Mode: accordion' : 'Mode: collapse';
    const activeKey = this.state.activeKey;
    return (<div style={{ margin: 20, marginLeft: 0, marginRight: 0}}>
      <Collapse
        accordion={accordion}
        onChange={this.onChange}
        activeKey={activeKey}
        expandIcon={expandIcon}
      >
        {this.getItems()}
      </Collapse>
    </div>);
  }
}


export default Course;