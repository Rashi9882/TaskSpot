import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { TaskService } from 'src/services/task.service';


@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists: any;
  tasks:any;

  constructor(private taskService : TaskService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        console.log(params);
        this.taskService.getTasks(params['listId']).subscribe((tasks:any) => {
        this.tasks = tasks;
        })
      }
      )

    this.taskService.getList().subscribe((lists: any) => {
         this.lists = lists;
    })
    
  }
  onTaskClick() {
    //We want to set the task to complete
    this.taskService.complete().subscribe(() => {
      console.log("Completed Successfully!")
    })
  }
  onTaskCl() {
    //We want to set the task to complete
    this.taskService.complete().subscribe(() => {
      console.log("Completed Successfully!")
    })
  }
  onTaskClicking() {
    //We want to set the task to complete
    this.taskService.complete().subscribe(() => {
      console.log("Completed Successfully!")
    })
  }
  
}
