import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import ITodo from '../../ITodo.interface'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

@Input() todo : ITodo
@Output() deleteItem = new EventEmitter<ITodo>()

  constructor() { }
    
  ngOnInit() {
  }

  onDelete(item: ITodo) {
    this.deleteItem.emit(item)
  }

}
