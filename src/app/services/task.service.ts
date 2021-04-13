import { Injectable } from '@angular/core';
import { Task } from '../shared/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  currentDate: Date = new Date();
  mockData: Task[] = [
    { _id : 1, description : 'take note', dueDate : new Date(this.currentDate.setDate(this.currentDate.getDate() - 1)) ,completed: false},
    { _id : 2 , description : 'watch movie', dueDate : new Date , completed: false}
  ]
  constructor() { }

  addTask(task: Task){
    this.mockData.push(task);
  }

  editTask(task: Task){
    let filteredTask = this.mockData.findIndex(data => data._id === task._id);
    if(filteredTask !== -1){
      this.mockData.splice(filteredTask,1,task);
    }
  }

  deleteTask(task: Task){
    let filteredTask = this.mockData.findIndex(data => data._id === task._id);
    if(filteredTask !== -1){
      this.mockData.splice(filteredTask,1);
    }
  }

  markAsComplete(task: Task){
    let filteredTask = this.mockData.findIndex(data => data._id === task._id);
    this.mockData[filteredTask].completed = true;
  }
}
