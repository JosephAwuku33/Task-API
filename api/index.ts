import "dotenv/config";
import express, { Express, Request, Response } from "express";
import taskRouter from "./v1/routes/taskRouter.js";
import { connectDB } from "./v1/config/dbCon.js";
import cors from "cors";
import bodyParser from "body-parser";
import swaggerjsdoc from "swagger-jsdoc";
import swaggerui from "swagger-ui-express";
import { options } from "./v1/utils/swaggerDocsOptions.js";
import chalk from "chalk";

const app: Express = express();

const port = process.env.API_PORT || 3000;
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use("/tasks", taskRouter);

const spacs = swaggerjsdoc(options);
app.use("/", swaggerui.serve, swaggerui.setup(spacs));
app.listen(port, () => {
  console.log(chalk.yellowBright(`Server listening on port ${port}`));
});

export default app;
