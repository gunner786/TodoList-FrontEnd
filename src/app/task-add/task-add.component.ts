import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TaskStorageService} from "../task-storage.service";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {

  taskName = new FormControl('');

  taskDescription = new FormControl('');

  constructor(private storage: TaskStorageService, 
  private router: Router, private route: ActivatedRoute) {
  }

  public createTask() {
    if(this.taskName.value == "" || this.taskDescription.value == "") {
      alert("Please enter task details");
      this.router.navigate(['tasks/add']);
      return;

    }
    this.storage.add(this.taskName.value, this.taskDescription.value);
    this.router.navigate(['tasks']);
  }
}
