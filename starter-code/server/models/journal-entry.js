const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const EntrySchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  content: {
    type: String,
    required: [true, "Content is required"]
  },
  date: {
    type: Date,
    default: Date.now
  }
});


const JournalEntry = mongoose.model('entry', EntrySchema);
module.exports = JournalEntry;
