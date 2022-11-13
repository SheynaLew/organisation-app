import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor(
    private listService: ListService
  ) { }

  ngOnInit(): void {
    this.addToList({key: 'a key', value: 1, ABoolean: true})
  }

  addToList(newListItem: {}) {
    this.listService.addToToDoList(newListItem);
  }

}
