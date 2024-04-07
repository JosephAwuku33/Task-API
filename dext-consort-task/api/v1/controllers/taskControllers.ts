/**
 * These are controller functions for working with a task
 */

import Task from "../data/model/task.js";
import { Request, Response } from "express";

//  @desc        Return all tasks available
//  @route       GET/tasks
//  @access      Public
const getAllTask = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();
    if (!tasks) {
      res.status(404).json({ message: "No task available" });
    }
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

//  @desc        Return the details of a specific task by its ID
//  @route       GET/task:id
//  @access      Public
const getSingleTask = (req: Request, res: Response) => {
  res.json(res.task);
};

//  @desc        Create a new individual task
//  @route       POST/task
//  @access      Public
const createNewTask = async (req: Request, res: Response) => {
  try {
    // obtain the input from the body of the request
    const { title, description, dueDate, status } = req.body;

    // validate the input given
    if (!title || !description || !dueDate || !status) {
      res.status(400).json({ message: "Please add all the required fields" });
    }

    const newTask = await Task.create({
      title,
      description,
      dueDate,
      status,
    });
    res.status(201).json(newTask);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

//  @desc        Update an existing ID by task
//  @route       PUT/task:id
//  @access      Public
const updateExistingID = async (req: Request, res: Response) => {
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
    const updatedTask = await res.task.save();
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

//  @desc        Delete a task by its ID
//  @route       DELETE/task:id
//  @access      Public
const deleteTask = async (req: Request, res: Response) => {
  try {
    await res.task.deleteOne();
    res.status(200).json({ message: "Task was succesfully deleted" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export {
  createNewTask,
  deleteTask,
  updateExistingID,
  getAllTask,
  getSingleTask,
};
