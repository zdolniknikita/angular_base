import { Injectable } from '@angular/core';
import ITodo from '../ITodo.interface'

@Injectable({
  providedIn: 'root'
})

export class TodolistServiceService {

  constructor() { }

  async getData() : Promise<ITodo[]> {
    
    return await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
  }

  addItem(todo: ITodo) {
    
    console.log('add todo', todo)
  }

  deleteItem(item: ITodo) {
    console.log(`delete item with id = ${item.id}`)
  }

  // editItem(item: ITodo){
  //   console.log(`edit item with tittle = ${item.title}`)
  // }
}
