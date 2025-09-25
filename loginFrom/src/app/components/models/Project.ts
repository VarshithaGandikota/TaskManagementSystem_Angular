import { User } from "./User";
import {Task} from "./Task"
export class Project {
    proj_id: number;
    proj_name: string;
    proj_owner: string;
    proj_created_date: Date;
    proj_description: string;
    user: User;
    task: Task[];
  
    constructor(
      proj_id: number,
      proj_name: string,
      proj_owner: string,
      proj_created_date: Date,
      proj_description: string,
      user: User,
      task: Task[]
    ) {
      this.proj_id = proj_id;
      this.proj_name = proj_name;
      this.proj_owner = proj_owner;
      this.proj_created_date = proj_created_date;
      this.proj_description = proj_description;
      this.user = user;
      this.task = task;
    }
  }