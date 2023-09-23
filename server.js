const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

const articleRouter = require("./routes/articles.js");

app.set("view engine", "ejs");

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "How to write title?",
      createdAt: new Date(),
      description: "This is how you write a description",
    },
  ];
18:27
res.render("articles/index", { articles });
});

app.listen(PORT, (req, res) => {
  console.log(PORT);
});
