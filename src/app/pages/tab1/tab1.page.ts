import { Component } from '@angular/core';
import { ConfigData } from 'src/app/data/common-data';
import { IToDo } from 'src/app/model/common.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public todoList: IToDo;
  constructor(public configData: ConfigData) {

  }

}
