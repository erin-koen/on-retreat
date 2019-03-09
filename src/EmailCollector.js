import React from "react";
import emailImg from "../src/Email_icon.png";
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
        <form
          onSubmit={this.clickHandler}
          className="email-collector"
          netlify
          data-netlify="true"
        >
        <div className="input">
          <img className="email-icon" alt="email-icon" src={emailImg} />
            <input
              type="email"
              placeholder="what's your e-mail?"
            />
        </div>
        <br />
          <button color="link" type="submit">
            Join
          </button>
        </form>
      );
    } else {
      return <h2>Thanks! We'll let you know when we've got the goods.</h2>;
    }
  }
}

export default EmailCollector;
