import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  changeState = (stage) => {
    console.log('click')
  }

}
