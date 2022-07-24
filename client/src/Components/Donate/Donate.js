import React from 'react';
import './Donate.css';
import {makeDonation} from '../../utils/utils'; 
import { Redirect } from "react-router-dom";

class Donate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null, 
      firstname: '', 
      surname: '', 
      amount: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  async handleSubmit(event) {
    if (!this.state.firstname || !this.state.surname || !this.state.amount ){
      alert ('Please complete all required fields'); 
    }
    else {
    makeDonation(this.state.firstname, this.state.surname, this.state.amount) 
    this.setState({ redirect: "/donated" });
    }
     event.preventDefault(); 
  }

        render(){
          if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }
          return (
            <div className='donate'>
              <p>We appreciate any and all donations, as our main source of funding this helps the museum to continue to support and educate our community.</p>
              <form onSubmit={this.handleSubmit}>
              <label for='firstname'>First Name:</label>
              <input type='text' id='firstname' name='firstname' onChange={this.handleChange} ></input>
              <br></br>
              <label for='surname'>Surname:</label>
              <input type='text' id='surname' name='surname' onChange={this.handleChange} ></input>
              <br></br>
              <br></br>
              <label for='amount'>Donation Amount:</label>
              <input type='number' id='amount' name='amount' onChange={this.handleChange} ></input>
              <br></br>
              <input type='submit' ></input>
              </form>
            </div>
        )}
    
}

export default Donate ;