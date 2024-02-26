const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  currency: String,
  department: String,
  sub_department: String,
  on_contract: {
    type: Boolean,
    default: false
  }
});

const Record = mongoose.model('Record', recordSchema);

module.exports = Record;
