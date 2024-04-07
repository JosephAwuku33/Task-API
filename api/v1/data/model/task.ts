import mongoose, { Document } from "mongoose";

export interface ITask {
  title: string;
  description: string;
  dueDate: Date;
  status: "TO DO" | "ONGOING" | "COMPLETED";
}

export type TaskDocument = ITask & Document;

const TaskSchema = new mongoose.Schema<TaskDocument>({
  title: {
    type: String,
    required: true,
    default: null,
  },

  description: {
    type: String,
    required: true,
    default: null,
  },

  dueDate: {
    type: Date,
    required: true,
    default: null,
  },

  status: {
    type: String,
    enum: ["TO DO", "ONGOING", "COMPLETED"],
    default: "TO DO",
  },
});

const Task = mongoose.model<TaskDocument>("Task", TaskSchema);
export default Task;
