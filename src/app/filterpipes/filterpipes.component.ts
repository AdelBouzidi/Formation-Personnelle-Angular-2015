import { Component, OnInit } from '@angular/core';
import { DummyService } from '../services/dummy.service';

@Component({
  selector: 'app-filterpipes',
  templateUrl: './filterpipes.component.html',
  styleUrls: ['./filterpipes.component.css']
})
export class FilterpipesComponent implements OnInit{


  constructor() {    
  }
  ngOnInit(): void {
  }

  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Users Data Received');
      console.log(this.appStatus);
    }, 3000);
  })

  filteredString: string='';
  users = [{
    name: 'Leela',
    joinedDate: new Date(15, 2, 2016)
  },
  {
    name: 'Rama',
    joinedDate: new Date(17, 3, 2019)
  },
  {
    name: 'Krishna',
    joinedDate: new Date(20, 4, 2019)
  },
  ];   
  


  onAddUser(){
    this.users.push({
      name: 'simple',
      joinedDate: new Date(12,2,2009)
    })
  }
}
