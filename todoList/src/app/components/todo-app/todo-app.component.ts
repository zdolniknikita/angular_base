import { Component, OnInit } from '@angular/core';
import { TodolistServiceService } from '../../services/todolist-service.service'
import ITodo from '../../ITodo.interface'
 
@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {


  constructor(private TS : TodolistServiceService) { 
  
  }

  async ngOnInit() {
  }

}
