import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  getList() {
    return this.webReqService.get('lists');
  }

  createList(title:string) {
    //We want to send a web request to create a list
    return this.webReqService.post('lists',{title});
  }

  getTasks(listId : string) {
    return this.webReqService.get(`lists/${listId}/tasks`);
  }

  createTask(title:string,listId:string) {
    //We want to send a web request to create a task
    return this.webReqService.post(`lists/${listId}/tasks`,{title});
  }

  complete() {
    return this.webReqService.patch(`lists/:listId/tasks/:taskId}` ,{
       commpleted:true
    })
  }
}
