import { Component, OnInit } from '@angular/core';
import { TodolistServiceService } from '../../services/todolist-service.service'

@Component({
  selector: 'todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todos: Array<any>
  constructor(private TS:TodolistServiceService) {
    this.todos = []
   }

  async ngOnInit() {
    this.todos = await this.TS.getData()
  }

  onChangeHadler = (id) =>  {

    this.todos = this.todos.map( todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
        return todo
      }
      return todo
    })
  }
}
