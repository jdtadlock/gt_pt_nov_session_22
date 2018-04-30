import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

class NoteForm extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      details: '',
      type: '',
      is_update: false,
      id: null
    }
  }

  componentDidMount = () => {
    const params = queryString.parse(this.props.location.search);
    
    if ( params.id ) {
      window.axios.get(`/note/${params.id}`)
        .then(({data}) => {
          this.setState({
            title: data.title,
            details: data.details,
            type: data.type,
            id: params.id,
            is_update: true
          })
        });
    }
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  createOrUpdateNote = (e) => {
    e.preventDefault();

    let url = this.state.is_update ? `/note/${this.state.id}?_method=PUT` : '/note';

    window.axios.post(url, {
      title: this.state.title,
      details: this.state.details,
      type: this.state.type
    }).then(res => {
      this.props.getNotes();
      this.props.history.push('/');
    });
  }

  render() {
    return (
      <div>
        <form className="column">
          <h1>Create Note</h1>

          <input type="text" 
            name="title" 
            value={this.state.title}
            placeholder="Title"
            onChange={this.handleChange} />

          <textarea
            name="details"
            value={this.state.details}
            placeholder="Details"
            onChange={this.handleChange}></textarea>

          <div className="row">
            <label>
              Personal
            <input type="radio" 
              name="type" 
              value="personal" 
              checked={this.state.type === 'personal'}
              onChange={this.handleChange} />
            </label>
            <label>
              Standard
            <input type="radio" 
              name="type" 
              value="standard" 
              checked={this.state.type === 'standard'}
              onChange={this.handleChange} />
            </label>
          </div>

          <button onClick={this.createOrUpdateNote}>Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(NoteForm);