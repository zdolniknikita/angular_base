import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodolistServiceService {

  constructor() { }

  async getData() : Promise<any> {
    
    return await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
  }
}
