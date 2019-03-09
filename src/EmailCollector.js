import React from "react";
import emailImg from "../src/Email_icon.png";
import insta from "../src/insta.png";
// import { Input, Button } from 'react-strap';

class EmailCollector extends React.Component {
  constructor() {
    super();
    this.state = {
      submitted: false
    };
  }

  clickHandler = e => {
    e.preventDefault();
    this.setState({
      submitted: true
    });
  };

  render() {
    if (!this.state.submitted) {
      return (
        <div className="submission">
          <form
           method="post" action="#" netlify
            onSubmit={this.clickHandler}
            className="email-collector"
            netlify
            // data-netlify="true"
          >
            <div className="input">
              <img className="email-icon" alt="email-icon" src={emailImg} />
              <input type="email" placeholder="what's your e-mail?" />
            </div>
            <br />
            <button type="submit">Join</button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="submission-response">
          <h2 className="email-collector">
            Thanks! We'll let you know when we've got the goods.
          </h2>
        </div>
      );
    }
  }
}

export default EmailCollector;
