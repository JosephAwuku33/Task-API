import mongoose from "mongoose";
const TaskSchema = new mongoose.Schema({
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
const Task = mongoose.model("Task", TaskSchema);
export default Task;
