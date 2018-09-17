import React, { Component } from 'react';
import './css/index.scss';

class Contact extends Component {

    validateForm() {
        const fname = document.forms["myForm"]["firstName"].value;
        const lname = document.forms["myForm"]["lastName"].value;
        const email = document.forms["myForm"]["email"].value;
        if (fname === "" || lname ==="") {
            alert("Name must be filled out");
            return false;
        } else if (email === "") {
            alert("Email must be filled out");
            return false;
        }
    }

  render() {

    return (
        <section className="form">
            <form name="myForm" onsubmit={this.validateForm} action="#" method="get" class="form">
                <div className="form__container">
                    <div className="form__container__contactForm">
                        <div>
                            <label for='firstName'> First Name: </label> 
                            <input type="text" id="firstName" name="firstName" required/>
                        </div>
                        <div>
                            <label for='lastName'> Last Name: </label> 
                            <input type="text" id="lastName" name="lastName" required/>
                        </div>
                        <div>
                            <label for='email'> Your Email: </label> 
                            <input type="text" id="email" name="email" required/>
                        </div>
                        <div>
                            <label for='company'> Company: </label> 
                            <input type="text" id="company" name="company" />
                        </div>
                    </div>
                </div>
                <div className="form__container__contactExtras">
                    <div className="form__container__contactExtras--flex">
                        <textarea placeholder="Please enter your comment or question here..." rows="20" cols="75"></textarea>
                        <input type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </section>
    );
  }
}

export default Contact;