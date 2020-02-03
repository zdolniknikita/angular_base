import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string
  stage: string
  stages: object
  
  constructor() {
    this.title = 'clicker';
    this.stage = 'main'
    this.stages = {
      main: 'main',
      game: 'game',
      finish: 'finish'
    }
  }
  

  changeStage = (stage: string) => {
    console.log('changeStage, new stage = ', stage)
    this.stage = this.stages[stage]
  }
  
}
