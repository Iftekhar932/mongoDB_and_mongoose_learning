const express = require("express");
const Article = require("./../models/article.js");
const router = express.Router();

// router.get("/", (req, res) => {});

router.get("/new", (req, res) =>
  res.render("articles/new", { article: new Article() })
);

router.get("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (article == null) res.redirect("/");
    res.render("articles/show", { article });
  } catch (error) {
    console.log("✨ 🌟  router.get line 15 error:", error);
  }
});

router.post("/", async (req, res) => {
  let article = new Article({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown,
  });
  console.log(req.body.title, req.body.description, req.body.markdown);
  article = await article.save();
  res.redirect(`/articles/${article.id}`);
  // res.render("articles/new", { article: article });
});

module.exports = router;
