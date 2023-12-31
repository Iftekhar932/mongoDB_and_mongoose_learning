const mongoose = require("mongoose");
const marked = require("marked");
const slugify = require("slugify");

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
  slug: {
    type: String,
    require: true,
    unique: true,
  },
});

articleSchema.pre("validate", function (next) {
  if (this.title)
    this.slug = slugify(this.title, { lower: true, strict: true }); // lower makes every letter lowercase and strict makes sure there isn't any character that doesn't fit in the url. E.G: The symbol ":" colon
  next();
});

module.exports = mongoose.model("Article", articleSchema);
