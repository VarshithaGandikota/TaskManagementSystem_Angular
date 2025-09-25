import { Project } from "./Project";
import { User } from "./User";


export class Task {
  task_id: number;
  task_no: string;
  title: string;
  task_start_date: Date;
  task_created_date: Date;
  task_update_date: Date;
  task_end_date: Date;
  task_status: string;
  task_assigne: string;
  task_description: string;
  task_comments: string;
  task_reported: string;
  project: Project;
  user: User;
  proj_id!: number;  // Reference to Project
  user_id!: number;  // Reference to User

  constructor(
    task_id: number,
    task_no: string,
    title: string,
    task_start_date: Date,
    task_created_date: Date,
    task_update_date: Date,
    task_end_date: Date,
    task_status: string,
    task_assigne: string,
    task_description: string,
    task_comments: string,
    task_reported: string,
    project: Project,
    user: User
  ) {
    this.task_id = task_id;
    this.task_no = task_no;
    this.title = title;
    this.task_start_date = task_start_date;
    this.task_created_date = task_created_date;
    this.task_update_date = task_update_date;
    this.task_end_date = task_end_date;
    this.task_status = task_status;
    this.task_assigne = task_assigne;
    this.task_description = task_description;
    this.task_comments = task_comments;
    this.task_reported = task_reported;
    this.project = project;
    this.user = user;
  }
}
