import { ITask } from "../../api/v1/data/model/task.ts";
import { TaskDocument } from "../../api/v1/data/model/task.ts";

declare global {
  namespace Express {
    interface Request {
      task: TaskDocument;
    }
    interface Response {
      task: TaskDocument;
    }
  }
}
