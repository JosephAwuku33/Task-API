/**
 * These are controller functions for working with a task
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Task from "../data/model/task.js";
//  @desc        Return all tasks available
//  @route       GET/tasks
//  @access      Public
const getAllTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield Task.find();
        if (!tasks) {
            res.status(404).json({ message: "No task available" });
        }
        res.json(tasks);
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
});
//  @desc        Return the details of a specific task by its ID
//  @route       GET/task:id
//  @access      Public
const getSingleTask = (req, res) => {
    res.json(res.task);
};
//  @desc        Create a new individual task
//  @route       POST/task
//  @access      Public
const createNewTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // obtain the input from the body of the request
        const { title, description, dueDate, status } = req.body;
        // validate the input given
        if (!title || !description || !dueDate || !status) {
            res.status(400).json({ message: "Please add all the required fields" });
        }
        const newTask = yield Task.create({
            title,
            description,
            dueDate,
            status,
        });
        res.status(201).json(newTask);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: err });
    }
});
//  @desc        Update an existing ID by task
//  @route       PUT/task:id
//  @access      Public
const updateExistingID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, dueDate, status } = req.body;
    if (title !== null) {
        res.task.title = req.body.title;
    }
    if (description !== null) {
        res.task.description = description;
    }
    if (dueDate !== null) {
        res.task.dueDate = dueDate;
    }
    if (status !== null) {
        res.task.status = status;
    }
    try {
        const updatedTask = yield res.task.save();
        res.status(200).json(updatedTask);
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
});
//  @desc        Delete a task by its ID
//  @route       DELETE/task:id
//  @access      Public
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield res.task.deleteOne();
        res.status(200).json({ message: "Task was succesfully deleted" });
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
});
export { createNewTask, deleteTask, updateExistingID, getAllTask, getSingleTask, };
