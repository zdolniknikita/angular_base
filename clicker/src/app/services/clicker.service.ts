import { Injectable } from '@angular/core';
import IUser from '../interfaces/IUser.interface'

@Injectable({
  providedIn: 'root'
})

export class ClickerService {

  currentUser: string
  users: Array<IUser>

  constructor() {
    this.users = this.getLocalStorage()//[]//JSON.parse(localStorage.getItem('clicker'))
    this.currentUser = ''

   }

   addUSer = (userName: string) => {
      if (!userName) return

      let findUSer = this.users.find(item => item.name === userName)

      if (findUSer) {
        this.currentUser = findUSer.name
      } else {
        this.currentUser = userName
        let newUser: IUser = {
          name: userName,
          records: []
        }
  
        this.users.push(newUser)
      }

      this.setLocalStorage()
   }

   addRecord = (userName: string, record: object) => {
        this.users = this.users.map( item => {
        if (item.name === userName) {

          item.records.push(record)
          return item
        }
        return item
      })

      this.setLocalStorage()
   }

   getRecordsByCurrentUser = () => this.users.find(item => item.name === this.currentUser)

   setLocalStorage = () => localStorage.setItem('clicker', JSON.stringify(this.users))

   getLocalStorage = () => {
    
      let users = localStorage.getItem('clicker')

      if (users) return JSON.parse(users)

      return []
   }


}
