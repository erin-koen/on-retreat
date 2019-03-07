import React from "react";
// import { Input, Button } from 'react-strap';

class EmailCollector extends React.Component {
  constructor() {
    super();
    this.state = {
      submitted: false
    };
  }

  clickHandler = (e) => {
    e.preventDefault();
    this.setState({
        submitted: true,
    })
  }

  render() {
    // if (!this.state.submitted) {
      return (
        <form onSubmit={this.clickHandler} className="email-collector" data-netlify="true">
        <input
          type="text"
          placeholder="  Our first collection goes live soon! Drop us your email to stay in touch."
        />
        <br />
        <button color="link" type="submit">submit</button> 
        </form> 
      )
    } 
    // else {
    //   return (<h2>Thanks! We'll let you know when we've got the goods.</h2>);
    // }
//   }
}

export default EmailCollector;


