const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const articleRouter = require("./routes/articles.js");
const Article = require("./models/article");

mongoose.connect("mongodb://localhost/blog", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false })); //If extended is false, you can not post "nested object"

app.get("/", async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 });
    res.render("articles/index", { articles });
  } catch (error) {
    console.log("✨ 🌟  app.get line 22 error:", error);
  }
});

app.use("/articles", articleRouter);

app.listen(PORT, (req, res) => {
  console.log(PORT);
});
