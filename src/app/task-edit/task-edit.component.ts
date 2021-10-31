import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TaskStorageService} from "../task-storage.service";
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  id: any;
  taskName = new FormControl('');
  taskDescription = new FormControl('');

  constructor(private storage: TaskStorageService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
      this.storage.editTask(params.get('id')).subscribe(data => {
        this.taskName.setValue(data.taskName);
        this.taskDescription.setValue(data.taskDescription);
      });
     
    });
  }

  updateTask() {
    this.storage.update(this.id, this.taskName.value, this.taskDescription.value);
    this.router.navigate(['/tasks']);
  }
}
