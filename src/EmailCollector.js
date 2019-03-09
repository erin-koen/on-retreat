import React from "react";
import emailImg from "../src/Email_icon.png";
// import { encode } from "iconv-lite";
// import { Input, Button } from 'react-strap';

const encode=(data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class EmailCollector extends React.Component {
  constructor() {
    super();
    this.state = {
      submitted: false,
      email: ""
    };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => this.setState({submitted: true}))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    if (!this.state.submitted) {
      return (
        <div className="submission">
          <form
            name="contact"
            method="post"
            action="#"
            onSubmit={this.handleSubmit}
            className="email-collector"
          >
            <div className="input">
              <img className="email-icon" alt="email-icon" src={emailImg} />
              <input
                type="email"
                name="email"
                placeholder="what's your e-mail?"
                onChange={this.handleChanges}
              />
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
