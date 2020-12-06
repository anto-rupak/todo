import { Component } from '@angular/core';
import { IToDo } from 'src/app/model/common.model';
import { TODOService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public title:any;
  public message:any;
  public status:boolean;
  constructor(public todoService: TODOService) {
    console.log('tesr')
   }

  postTodoList(obj:IToDo) {
    obj.message =this.message;
    obj.title = this.title;
    obj.done = this.status
    this.todoService.postAsync(obj).subscribe(result => {
      if (result !== (null || undefined)) {
        console.log(result)
      }else{
        console.log(result)
      }
    },err => { // error handling only for HTTPErrorResponse .
       console.log(err)
      });
  }
}
