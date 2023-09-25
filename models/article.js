const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  markdown: { type: String },
  createdAt: { type: Date, default: () => new Date() },
});

module.exports = mongoose.model("Article", articleSchema);
