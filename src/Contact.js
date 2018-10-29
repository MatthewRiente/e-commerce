import React, { Component } from 'react';
import Hero from './Hero';
import './css/index.scss';

class Contact extends Component {
  render() {

    return (
        <div>
            <section>
                <Hero />
            </section>
            <section className="form">
                <form name="myForm" method="POST" action="http://localhost:8080/contact_data" className="form">
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
                            <textarea htmlFor='comment' name="comment" placeholder="Please enter your comment or question here..." rows="20" cols="75"></textarea>
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
