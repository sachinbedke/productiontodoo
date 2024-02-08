const Todo = require("../model/Todo")



exports.getTodos = async (req, res) => {
    try {
        const result = await Todo.find()
        res.status(200).json({ message: "fetch success", result })
    } catch (error) {
        res.status(400).json({ message: error.message || "something went wrong" })

    }
}
exports.addTodo = async (req, res) => {
    try {
        await Todo.create(req.body)
        res.status(201).json({ message: "add todo success" })
    } catch (error) {
        res.status(400).json({ message: error.message || "something went wrong" })

    }
}
exports.updateTodo = async (req, res) => {
    try {
        await Todo.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ message: "update todo success" })
    } catch (error) {
        res.status(400).json({ message: error.message || "something went wrong" })

    }
}
exports.deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "delete todo success" })
    } catch (error) {
        res.status(400).json({ message: error.message || "something went wrong" })

    }
}