import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';


  constructor() { }  //this is a constructor and will run the initialization of the component

  ngOnInit(): void {
  }

  toggleAddTask() {
    console.log('toggle');
  }

}
