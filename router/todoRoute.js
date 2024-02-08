const { getTodos, addTodo, updateTodo, deleteTodo } = require("../controller/todoController")

const router = require("express").Router()

router
    .get("/todo", getTodos)
    .post("/todo-add", addTodo)
    .put("/update-todo/:id", updateTodo)
    .delete("/delete-todo/:id", deleteTodo)

module.exports = router