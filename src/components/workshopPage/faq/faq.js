import 'rc-collapse/assets/index.css';
import Collapse, { Panel } from 'rc-collapse';
import React from 'react';
import ReactDOM from 'react-dom';

import './faq.scss'

const faqs = [
  {
    question: 'How do I enroll for the Online Training?',
    answer: 'If you’re interested in the Workshop, register with us by filling in your details on the form above and click on enroll. We will get in touch with you soon.'
  },
  {
    question: 'Are the timings flexible? When will the live discussions be scheduled?',
    answer: "All the discussions will be conducted from 9:00-10:00PM because that's the time when both mentees and mentors are free."
  },
  {
    question: 'When will my workshop start?',
    answer: 'All workshops start on the 1st of the month that you choose. The workshop ends after a month of the starting date. So if you are in the January batch, your workshop will start on the 1st of January and proceed till the 1st of February.'
  },
  {
    question: 'What happens if I miss a live discussion?',
    answer: 'You can access the discussion that you missed on your web portal, as all the discussions get stored there. So you will virtually be missing nothing.'
  },
  {
    question: 'How can I log in?',
    answer: 'You will receive an SMS as soon as you finish payment with details on how to use your MyCaptain account. You will also receive an email from us with links to activate your account. Please note that it may land in your updates or promotions tabs. Please note that even if you sign up, you will not have access to your workshop until it begins on the 1st.'
  }
]

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

class FaqComponent extends React.Component {
  state = {
    time: random(),
    accordion: false,
    activeKey: ['0'],
  }

  onChange = (activeKey) => {
    this.setState({
      activeKey,
    });
  }

  getItems() {
    const items = [];
    for (let i = 0, len = faqs.length; i < len; i++) {
      const key = i + 1;
      items.push(
        <Panel header={faqs[i].question} key={key}>
          <p>{faqs[i].answer}</p>
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
        className="faq"
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


export default FaqComponent;