const express = require("express");
const router = express.Router();
const books = require("../../data/db");
const user = require("../../data/user");
const uuid = require("uuid");

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/books", (req, res) => {
  res.json(user);
});

router.get("/books/:id", (req, res) => {
  let sun = books.some((book) => book.id === parseInt(req.params.id));

  if (sun) {
    res.json(books.find((book) => book.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No users with the id of ${req.params.id}` });
  }
});

router.post("/book_body", (req, res) => {
  const newUser = {
    uuid: uuid.v4(),
    id: req.body.id,
    name: req.body.name,
  };
  if (!newUser.id || !newUser.name) {
    return res.status(400).json({ msg: "Please include a name and email" });
  }

  books.push(newUser);
  res.json(books);
});

router.put("/books_put/:id", (req, res) => {
  let found = books.some((book) => book.id === parseInt(req.params.id));
  if (found) {
    const updBook = req.body;
    books.forEach((book) => {
      if (book.id === parseInt(req.params.id)) {
        book.id = updBook.id ? updBook.id : book.id;
        book.name = updBook.name ? updBook.name : book.name;
        res.json({ msg: "User updated", book });
      }
    });
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
});

router.delete("/books_delete/:id", (req, res) => {
  let found = books.some((book) => book.id === parseInt(req.params.id));
  if (found) {
    res.json({
      msg: "Member deleted",
      users: books.find((book) => book.id !== parseInt(req.params.id)),
    });
  } else {
    res
      .status(400)
      .json({ msg: ` No user with the id of : ${req.params.id} ` });
  }
});

module.exports = router;
