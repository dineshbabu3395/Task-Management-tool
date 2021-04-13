import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { Task } from 'src/app/shared/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, OnChanges {

  @Input() taskInput: Task;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log(this.taskInput);
  }

}
