/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - dueDate
 *         - status
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of your task
 *         description:
 *           type: string
 *           description: The task explanation
 *         dueDate:
 *           type: string
 *           format: date
 *           description: The date the task is due
 *         status:
 *           type: string
 *           enum: [TO DO, ONGOING, COMPLETED]
 *
 */
/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: The task managing API
 * /tasks:
 *   get:
 *     summary: Lists all the available tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *       404:
 *          description: No task is available at the moment
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: The newly created task.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Some Internal server error
 * /tasks/{id}:
 *   get:
 *     summary: Get a task given its id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task id
 *     responses:
 *       200:
 *         description: The task response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: The task was not found
 *   put:
 *    summary: Update the task by the id
 *    tags: [Tasks]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *           type: string
 *        required: true
 *        description: The task id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *        description: The task was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Task'
 *      404:
 *        description: The task was not found
 *      500:
 *        description: Some error happened with the server
 *   delete:
 *     summary: Remove the task by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task id
 *
 *     responses:
 *       200:
 *         description: The task was deleted
 *       404:
 *         description: The task was not found
 */

import express from "express";
import { getTask } from "../middleware/getTaskById.js";
import {
  createNewTask,
  deleteTask,
  updateExistingID,
  getAllTask,
  getSingleTask,
} from "../controllers/taskControllers.js";

const taskRouter = express.Router();

// defining the routes for the application

// retreive all tasks
taskRouter.get("/", getAllTask);

// retrieve a single task
taskRouter.get("/:id", getTask, getSingleTask);

// create a new task
taskRouter.post("/", createNewTask);

// update an existing task
taskRouter.put("/:id", getTask, updateExistingID);

// delete a task
taskRouter.delete("/:id", getTask, deleteTask);

export default taskRouter;
