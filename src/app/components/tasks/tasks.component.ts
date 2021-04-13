import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskService } from 'src/app/services/task.service';
import { ModalComponent } from 'src/app/shared/modalComponent/modal/modal.component';

import { Task } from 'src/app/shared/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  currentDate:Date = new Date;
  constructor(private taskService: TaskService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.tasks = this.taskService.mockData;
  }

  addTask(){
    const dialogRef = this.dialog.open(ModalComponent ,{
      width: '450px',
      data: { description: '', dueDate: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result){
        this.taskService.addTask(result);
      }
    });
  }

  editTask(task: Task){
    const dialogRef = this.dialog.open(ModalComponent ,{
      width: '450px',
      data: { _id: task._id , description: task.description, dueDate: task.dueDate}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.taskService.editTask(result);
    });
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task)
  }

  markAsComplete(task: Task){
    this.taskService.markAsComplete(task);
  }
  getToolTip(task: Task){
    if(task.completed){
      return `Task has been completed`;
    }else if(task.dueDate < this.currentDate){
      return `Task has past due date`;
    }
  }
}
