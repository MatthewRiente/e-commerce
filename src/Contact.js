import React, { Component } from 'react';
import Hero from './Hero';
import './css/index.scss';

class Contact extends Component {

    // use a second fetch to use method: get, its not the same as a get request so it should be fine.

    // validateForm() {
    //     const fname = document.forms["myForm"]["firstName"].value;
    //     const lname = document.forms["myForm"]["lastName"].value;
    //     const email = document.forms["myForm"]["email"].value;
    //     if (fname === "" || lname ==="") {
    //         alert("Name must be filled out");
    //         return false;
    //     } else if (email === "") {
    //         alert("Email must be filled out");
    //         return false;
    //     }
    // }

  render() {

    return (
        <div>
            <section>
                <Hero />
            </section>
            <section className="form">
                <form name="myForm" method="POST" action="http://localhost:3001/users" className="form">
                    <div className="form__container">
                        <div className="form__container__contactForm">
                            <div>
                                <label htmlFor='fname'> First Name: </label> 
                                <input type="text" id="fname" name="fname" />
                            </div>
                            <div>
                                <label htmlFor='lname'> Last Name: </label> 
                                <input type="text" id="lname" name="lname" />
                            </div>
                            <div>
                                <label htmlFor='email'> Your Email: </label> 
                                <input type="text" id="email" name="email" />
                            </div>
                            <div>
                                <label htmlFor='company'> Company: </label> 
                                <input type="text" id="company" name="company" />
                            </div>
                        </div>
                    </div>
                    <div className="form__container__contactExtras">
                        <div className="form__container__contactExtras--flex">
                            <textarea htmlFor='comment' placeholder="Please enter your comment or question here..." rows="20" cols="75"></textarea>
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
  }
}

export default Contact;