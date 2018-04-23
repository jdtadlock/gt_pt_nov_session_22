import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import Header from './components/Header';
import Contact from './components/Contact';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      our_title: 'Some Title',
      count: 0
    }
  }

  runTest() {
    window.axios.get('/test')
      .then(res => {
        console.log(res.data); // {message: 'It Worked!'}
      });
  }

  increaseCount = () => {
    console.log(this.state.count);
    if ( this.state.count > 10 ) {
      this.props.history.goBack();
    }
      

    this.setState({
      count: this.state.count + 1
    })
  }

  componentDidMount = () => {
    // console.log(this.props.history.push('/contact'));
  }
  

  render() {
    return (
      <div>
        <Header title={this.state.our_title} increase={this.increaseCount} />
        <div className="container">
          <h1>{this.state.count}</h1>
          <button onClick={this.increaseCount}>Increase Count</button>

          <Route path="/contact" component={Contact} />
          <button onClick={this.runTest}>Test</button>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
