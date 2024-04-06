// This middleware aids in retrieving the task given a specific ID
import { NextFunction, Request, Response } from "express";
import { TaskDocument } from "../data/model/task.js";
import Task from "../data/model/task.js";

export async function getTask(req: Request, res: Response, next: NextFunction) {
  try {
    const task: TaskDocument | null = await Task.findById(req.params?.id);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    res.task = task;
    next();
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}
