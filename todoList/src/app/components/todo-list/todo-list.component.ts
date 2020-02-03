import { Component, OnInit, Input } from '@angular/core';
import ITodo from '../../ITodo.interface'
import { TodolistServiceService } from '../../services/todolist-service.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})


export class TodoListComponent implements OnInit {
  
  
  todos : Array<ITodo>
  constructor(private TS : TodolistServiceService) { 
    this.todos = []
  }

  async ngOnInit() {
    this.todos = await this.TS.getData()
  }

  onDeleteHandler(item: ITodo) {
    this.TS.deleteItem(item)
  }

}
