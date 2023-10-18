import React from "react";
import "./contact.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div id="root">
      <header>
        <Header />
      </header>
      <div className="slanting-contact-div"></div>
      <div className="contact">
        <div className="inner-contact">
          <div className="contact-left">
            <div className="contact-heading">
              <p>Help & Support</p>
              <p>
                Find Bugs? Report us and you will get the hear back within 24hrs
              </p>
            </div>
            <div className="support-overlay">
              <p>24 Hours</p>
            </div>
            <div className="ContactFormContainer">
              <form>
                <div className="con-name">
                  <label>
                    <input
                      style={{ borderRadius: "5px" }}
                      type="text"
                      name="Name"
                      id="name"
                      placeholder="First Name*"
                      required
                    ></input>
                  </label>
                </div>
                <div>
                  <label className="con-email">
                    <input
                      style={{ borderRadius: "5px" }}
                      type="email"
                      name="_replyto"
                      id="email"
                      placeholder="Your Email*"
                      required
                    ></input>
                  </label>
                  <br></br>
                  <label className="con-text">
                    <input
                      style={{ borderRadius: "5px" }}
                      type="text"
                      name="_replyto"
                      id="board"
                      placeholder="Subject*"
                      required
                    ></input>
                  </label>
                </div>
                <label>
                  <textarea
                    style={{ width: "350px", borderRadius: "5px" }}
                    className="contact-textarea"
                    name="message"
                    rows="6"
                    placeholder="Your Message*"
                    required
                  ></textarea>
                </label>
                <button
                  className="contact-send-button"
                  type="sumbit"
                  value="send"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
          <div className="contact-right">
            <img
              src="https://sherise.vercel.app/static/media/Contact.411fe596bada1e8b499a1414f538a7d2.svg"
              alt=""
              style={{ width: "100%", height: "auto" }}
            ></img>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
