import { Project } from "./Project";
import { Task } from "./Task";

export class User {
    user_id: number;
    username: string;
    email: string;
    password: string;
    project: Project[];
    task: Task[];
  
    constructor(
      user_id: number,
      username: string,
      email: string,
      password: string,
      project: Project[],
      task: Task[]
    ) {
      this.user_id = user_id;
      this.username = username;
      this.email = email;
      this.password = password;
      this.project = project;
      this.task = task;
    }
  }
  