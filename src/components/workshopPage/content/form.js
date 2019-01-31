import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import ScrollableAnchor from 'react-scrollable-anchor'
import Logo from '../../../assets/home/logo.webp';
import Paytm from '../../../assets/paytm.png'
import Razorpay from '../../../assets/razorpay.png'
import './form.scss'
import {ToastContainer, ToastStore} from 'react-toasts';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const initialState = {
      name: '',
      email: '',
      phone: '',
      school: '',
      city: '',
      batch: months[(new Date()).getMonth() + 1] + ' ' +(new Date()).getFullYear(),
      choosePayment: false,
      choosedOption: ''
     } 
const orderId = "ORDER" + Math.floor(Math.random()*90000) + 10000 + "";
const CUST_ID  = "CUST" + Math.floor(Math.random()*90000) + 10000 + "";

class FormComponent extends Component {
  constructor(props)
  {
     super(props);
     this.state = initialState

     this.paytmPayed = this.chooseOption.bind(this, 'Paytm');
     this.razorPayed = this.chooseOption.bind(this, 'Razorpay');
  }

  onChange(event){
    this.setState({
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  showOptions(event)
  {
    event.preventDefault();

  }

  chooseOption(name, option)
  {
    this.setState({
      choosedOption: name
    })
  }


  finalPayment(event)
  {
    event.preventDefault();
    const {data} = this.props;
    window.fbq('track', 'InitiateCheckout', {
      content_name: data.name
    })
    if(this.state.choosedOption == 'Razorpay')
    {
      this.payRazor();
    }
    else
    {
      window.$('#postForm').submit()
    }

    }

  startPayment(event)
  {
    const {data} = this.props;
    window.fbq('track', 'Lead', {
      content_name: data.name
    })
    event.preventDefault();
    const {name, email, phone, school, city, batch} = this.state;
     if(name && email && phone && school && city && batch)
     {
    this.setState({
      choosePayment: true
    })
  }
  else
  {
    ToastStore.error("Please check your input :(",3000,'whiteColor')
  }
  }

  cancelPayment(event)
  {
    event.preventDefault();
    this.setState({
      choosePayment: false
    })
  }

  payRazor()
  {
    const {name, email, phone, school, city, batch} = this.state;
    const {data} = this.props;
        const sendData = this.state;
    sendData['workshop'] = data.name;
    sendData['price'] = data.price;
    if(name && email && phone && school && city && batch)
    {
    var options = {
    "key": "rzp_live_q0YehZSNpKZaQj",
    "amount": 1*100, // 2000 paise = INR 20
    "name": name,
    "description": `Payment for ${data.name}`,
    "image": {Logo},
    "handler": function (response){
        this.setState(initialState);
    },
    "prefill": {
        "name": "Gaurav Kumar",
        "email": "test@test.com"
    },
    "notes": {
        "details": JSON.stringify(sendData)
    },
    "theme": {
        "color": "#F37254"
    }
};
var rzp1 = new window.Razorpay(options);
rzp1.open();
}
else
{
  ToastStore.error("Please check your input :(",3000,'whiteColor')
}

  }

  render() {
    const {data} = this.props;
    return (
      <div>
       <ToastContainer store={ToastStore} position={ToastContainer.POSITION.TOP_CENTER}/>
       <ScrollableAnchor id={'form'}>
     <div className="form" >
     
     {this.state.choosePayment ? (
      <Row>
      <Col sm="12" md="12" lg="12" className="text-center">
       <h4 className="payingDetails"> You are paying <b>{data.price}</b> for workshop <b>{data.name}</b></h4></Col>
      <Col sm="12" md="12" lg="12" className="payment text-center">
         <img
                src={Paytm}
                style={{border: this.state.choosedOption === 'Paytm' ? '2px solid green' : ''}}
                alt="Responsive image"
                className="img-fluid paymentPaytm"
                onClick={this.paytmPayed}
              />
      </Col>
       <Col sm="12" md="12" lg="12" className="payment text-center">
         <img
                src={Razorpay}
                style={{border: this.state.choosedOption === 'Razorpay' ? '2px solid green' : ''}}
                alt="Responsive image"
                className="img-fluid paymentRazorpay"
                onClick={this.razorPayed}
              />
      </Col>
      <Col sm="12" md="12" lg="12" className="payment text-center">
       {this.state.choosedOption ? ( <h4 className="payingDetails"> You have choosed <b> {this.state.choosedOption} </b> as your payment gateway </h4>) : ( <h4 className="payingDetails"> Choose your payment </h4>)}
      
      
      </Col>
      <Col sm="12" md="12" lg="12" className="cancel text-center">
      {this.state.choosedOption ? (<Button className="enroll" onClick={this.finalPayment.bind(this)}>PAY NOW</Button>) : ''}
      <Button className="enroll" style={{backgroundColor: '#e66d6d'}} onClick={this.cancelPayment.bind(this)}>CANCEL</Button>
      </Col>
      </Row>

      ) : (
      <div>

      <h2> ENROLL NOW </h2>
       <Form className="text-center">
        <FormGroup>
          <Input type="text" name="name" id="name" placeholder="Name" onChange={this.onChange.bind(this)} value={this.state.name} />
        </FormGroup>
        <FormGroup>
          <Input type="email" name="email" id="email" placeholder="Email" onChange={this.onChange.bind(this)} value={this.state.email} />
        </FormGroup>
        <FormGroup>
          <Input type="number" name="phone" id="phone" placeholder="Phone Number" onChange={this.onChange.bind(this)} value={this.state.phone} />
        </FormGroup>
         <FormGroup>
          <Input type="text" name="school" id="school" placeholder="School / University" onChange={this.onChange.bind(this)} value={this.state.school} />
        </FormGroup>
         <FormGroup>
          <Input type="text" name="city" id="city" placeholder="City" onChange={this.onChange.bind(this)} value={this.state.city} />
        </FormGroup>
         <FormGroup>
          <Input type="select" name="batch" id="batch" onChange={this.onChange.bind(this)}  value={this.state.batch} >
            <option>February 2019</option>
            <option>March 2019</option>
            <option>April 2019</option>
            <option>May 2019</option>
            <option>June 2019</option>
          </Input>
        </FormGroup>
        <a className="enroll" onClick={this.startPayment.bind(this)}>ENROLL NOW</a>
      </Form>
      </div>
        )}
     
     </div>
      </ScrollableAnchor>
      <form class="ui form" id="postForm" name="postForm" action="https://joinmycap.herokuapp.com/testtxn" method="POST">
  <input type="hidden" name="CUST_ID" id="CUST_ID" value={CUST_ID}/>
  <input type="hidden" name="ORDER_ID" id="ORDER_ID" value={orderId}/>
  <input type="hidden" name="TXN_AMOUNT" id="TXN_AMOUNT" value={parseFloat(1).toFixed(2) + ""}/>
  <input type="hidden" name="DATA" id="DATA" value={JSON.stringify({details: this.state, workshop: this.props.data.name})} />
  <button class="ui button submitButton"  >submit</button>

</form>
      </div>
    );
  }
}

export default FormComponent;