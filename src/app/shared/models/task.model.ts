export class Task {
  taskName: string;
  taskDescription: string;
  id: number;

  constructor(taskName, taskDescription, id) {
    this.taskDescription = taskDescription;
    this.taskName = taskName;
    this.id = id;
  }
}
