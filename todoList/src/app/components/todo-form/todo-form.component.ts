import { Component, OnInit } from '@angular/core';
import { TodolistServiceService } from '../../services/todolist-service.service'
import ITodo from '../../ITodo.interface'

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  // newTodo : ITodo
  title : string
  constructor(private TS: TodolistServiceService) {

    this.title = ''

   }

  ngOnInit() {
  }

  onAddHandler() {
    console.log('onAddHadler')
    let newTodo : ITodo = {
      title: this.title,
      userId: Math.random(),
      id: Math.random(),
      completed: false
    }

    this.TS.addItem(newTodo)
  }

}
