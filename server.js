const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const articleRouter = require("./routes/articles.js");
const Articles = require("./models/article");

mongoose.connect("mongodb://localhost/blog", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false })); //If extended is false, you can not post "nested object"

app.get("/", async (req, res) => {
  /*  const articles = [
    {
      title: "How to write title?",
      createdAt: new Date(),
      description: "This is how you write a description",
    },
  ]; */
  const articles = await Articles.find();
  res.render("articles/new", { articles });
});
app.use("/articles", articleRouter);

app.listen(PORT, (req, res) => {
  console.log(PORT);
});
