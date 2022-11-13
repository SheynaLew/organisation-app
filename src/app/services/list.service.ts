import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private toDoList: {}[] = [];

  constructor() { }

  // fill toDoList array with data

  // add item to toDoList array
  addToToDoList(newListItem: {}) {
    this.toDoList.push(newListItem);
    console.log(this.toDoList); 
  }

  // mark item in toDoList array as done

  // refresh an item in toDoList array

  // delete an item from the toDoList array
}
