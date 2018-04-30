import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import Header from './components/Header';
import NoteForm from './components/NoteForm';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      our_title: 'Note App Example',
      notes: []
    }
  }  

  componentDidMount() {
    this.getNotes();
  }
  
  getNotes = () => {
    window.axios.get('/notes')
      .then(res => {
        this.setState({ notes: res.data });
      })
  }

  updateNote = (id) => {
    this.props.history.push(`/create?id=${id}`);
  }

  deleteNote = (id) => {
    window.axios.post(`/note/${id}?_method=DELETE`)
      .then(res => {
        this.getNotes();
      })
  }

  render() {
    return (
      <div>
        <Header title={this.state.our_title} increase={this.increaseCount} />
        <div className="container">
          <Route path="/create" render={props => (
            <NoteForm getNotes={this.getNotes} />
          )} />

          <Route path="/" exact render={props => (
            this.state.notes.length ? (
              <div className="row wrap">
                {this.state.notes.map(note => (
                  <div className="note" key={note._id}>
                    <h3>{note.title}</h3>
                    <p>{note.details}</p>
                    <p>{note.type}</p>
                    <button onClick={() => this.updateNote(note._id)}>Update Note</button>
                    <button onClick={() => this.deleteNote(note._id)}>Delete Note</button>
                  </div>
                ))}
              </div>
            ) : <h1>No Notes Have Been Added.</h1>
          )} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
