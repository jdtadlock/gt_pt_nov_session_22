import React, { Component } from 'react';

class Contact extends Component {
  runTest() {
    window.axios.get('/test')
      .then(({ data }) => {
        console.log(data);
      })
  }

  render() {
    return(
      <div>
        <h1>Contact</h1>
        <button onClick={this.runTest}>Test</button>
      </div>
    )
  }
}

export default Contact;