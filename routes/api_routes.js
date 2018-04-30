const Note = require('../models/Note');

module.exports = (app) => {
  app.post('/note', (req, res) => {
    Note.create(req.body)
      .then(note => {
        res.send(note);
      });
  });

  app.get('/notes', (req, res) => {
    Note.find({}).then(notes => res.send(notes));
  });

  app.get('/note/:id', (req, res) => {
    Note.findById(req.params.id)
      .then(note => {
        res.send(note);
      });
  });

  app.put('/note/:id', (req, res) => {
    Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }).then(note => {
        res.send(note);
      })
  });

  app.delete('/note/:id', (req, res) => {
    // console.log(req.params.id);
    Note.findByIdAndRemove(req.params.id)
      .then(() => {
        console.log('worked');
        res.send({ message: 'Note Removed Successfully' })

      });
  });
}