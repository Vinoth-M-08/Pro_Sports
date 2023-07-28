import "./Contact.css"
import React, { useState } from 'react';
import anim from "../Assets/fun-3d-cartoon-breton-character.jpg"
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import pro from "../Assets/sports-tools.jpg"
import axios from "axios";
function Contact() {
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Error, setError] = useState(false);
  const [description, setdescription] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (Username.length === 0 || Email.length === 0 || Mobile.length !== 10) {
      setError(true);
      return;
      alert("Succesfully submited");
    }

    const data = {
      name: Username,
      email: Email,
      Mobile:Mobile,
      description: description,
    };

    axios.post("http://localhost:8081/addsupport", data)
      .then((response) => {
        console.log(response.data); // Server response, you can handle it as needed
        alert("Successfully submitted!");
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
        alert("Successfully submitted!");
      });
  };


    return ( <>
    <div className="img_wrrap">
        </div>
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${pro})` }}
        ></div>
        <h4 className='con_h4'>--Get in touch with us---</h4>
      </div>
    <div className='img_ccont'>
  <div class="content n">
    <div class="container">
      <div class="row align-items-stretch no-gutters contact-wrap">
        <div class="col-md-6">
          <div class="form h-100">
            <h3>Send us a message</h3>
            <form class="mb-5" method="post" id="contactForm" name="contactForm">
              <div class="row">
                <div class="col-md-6 form-group mb-5">
                  <label for="" class="col-form-label">Name *</label>
                  <input type="text" class="form-control" name="name" id="name" placeholder="Your name"  onChange={e => setUsername(e.target.value)}/>
                </div>
                <div class="col-md-6 form-group mb-5">
                  <label for="" class="col-form-label">Email *</label>
                  <input type="text" class="form-control" name="email" id="email"  placeholder="Your email"  onChange={e => setEmail(e.target.value)}/>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 form-group mb-5">
                  <label for="" class="col-form-label">Mobile</label>
                  <input type="text" class="form-control" name="phone" id="phone"  placeholder="Phone #"  onChange={e => setMobile(e.target.value)}/>
                </div>
                </div>

              <div class="row">
                <div class="col-md-12 form-group mb-5">
                  <label for="message" class="col-form-label">description *</label>
                  <textarea class="form-control" name="message" id="message" cols="30" rows="4"  placeholder="Write your message"  onChange={e => setdescription(e.target.value)}></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <input type="submit" value="Send Message" class="btn btn-primary rounded-0 py-2 px-4" onClick={handleSubmit} />
                  <span class="submitting"></span>
                </div>
              </div>
            </form>

            <div id="form-message-warning mt-4"></div> 
            <div id="form-message-success">
              Your message was sent, thank you!
            </div>

          </div>
        </div>
        <div class="col-md-6">
          <div class="contact-info h-100">
            <img src={anim} width={600}/>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <Footer/>
    </> );
}

export default Contact;



