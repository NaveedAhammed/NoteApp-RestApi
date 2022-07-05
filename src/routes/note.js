const express = require('express');
const noteRouter = express.Router();
const auth = require("../middlewares/auth");
const { getNotes, createNote, deleteNote, updateNote } = require("../controllers/noteController");

noteRouter.get("/", auth, getNotes);

noteRouter.post("/", auth, createNote);

noteRouter.delete("/:id", deleteNote);

noteRouter.put("/:id", updateNote);

module.exports = noteRouter;