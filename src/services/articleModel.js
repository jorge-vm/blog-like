const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleModel = new Schema(
  {
    title: { type: String },
    author: { type: String },
    body: { type: String },
  },
);

module.exports = mongoose.model('Article', articleModel);
