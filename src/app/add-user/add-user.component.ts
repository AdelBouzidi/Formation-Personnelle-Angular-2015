import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  // providers:[UserService],
})
export class AddUserComponent implements OnInit{
  userName:string ='';

  
  ngOnInit(): void {
  } 

  constructor(private userService : UserService) {    
  }
  onAddUser(){
    this.userService.addUser(this.userName, 'active');
  }
}