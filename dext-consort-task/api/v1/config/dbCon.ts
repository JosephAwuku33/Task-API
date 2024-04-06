import chalk from "chalk";
import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;
const databaseName = process.env.DB_NAME;

export const connectDB = () => {
  mongoose
    .connect(MONGO_URL, {
      autoIndex: false,
      dbName: databaseName,
    })
    .then(() => {
      console.log(chalk.blue("Succesfully connected to database"));
    })
    .catch((error) => {
      console.log(
        chalk.redBright("Database connection failed......exiting now")
      );
      console.error(chalk.red("Database connection failed......exiting now"));
      console.log(error);
      process.exit(1);
    });
};
