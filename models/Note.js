const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title: String,
  details: String,
  type: String // Personal Standard
});

module.exports = mongoose.model('Note', NoteSchema);