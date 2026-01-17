const Todo = require('../models/Todo.js')

class TodoController{
  static createDoc = async(req,res) =>{
    try {
        const newTask = new Todo(req.body);
        const NewTask=await newTask.save();
        res.status(201).json({ data: NewTask });
    } catch (err) {
        res.status(400).json({ error: "Failed to create task", details: err.message });
    }
  }

  static getAllDoc = async (req, res) => {
    try {
        const tasks = await Todo.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ error: "Server error while fetching tasks" });
    }
  }

  static updateDocById =async (req, res) => {
    try {
        const updatedTask = await Todo.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true } 
        );

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({message:`"${updatedTask.item}" updated successfully`,data:updatedTask});
    } catch (err) {
        res.status(400).json({ error: "Update failed", details: err.message });
    }
  }

  static deleteDocById = async (req, res) => {
    try {
        const deletedTask = await Todo.findByIdAndDelete(req.params.id);
        
        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: `Item "${deletedTask.item}" was deleted successfully` });
    } catch (err) {
        res.status(500).json({ error: "Delete failed" });
    }
  }
}

module.exports=TodoController