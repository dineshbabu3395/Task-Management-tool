import { Injectable } from '@angular/core';
import { Task } from '../shared/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  currentDate: Date = new Date();
  min:number = 1;
  max:number = 100;
  mockData: Task[] = [
    { _id : this.generateRandomNumber(this.max,this.min), description : 'take note', dueDate : new Date(this.currentDate.setDate(this.currentDate.getDate() - 1)) ,completed: false},
    { _id : this.generateRandomNumber(this.max,this.min) , description : 'watch movie', dueDate : new Date , completed: false},
    { _id : this.generateRandomNumber(this.max,this.min) , description : 'football', dueDate :  new Date(Date.now() + ( 3600 * 1000 * 24)) , completed: true}
  ]
  constructor() { }

  addTask(task: Task){
    const randomId = this.generateRandomNumber(this.max,this.min);
    this.mockData.push({ _id: randomId , ...task});
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

  generateRandomNumber(max,min){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
