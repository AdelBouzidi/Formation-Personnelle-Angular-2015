import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './services/guardes/auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'angularrouting';
  userAdded = false;
  userAddedSubscription: Subscription = new Subscription;
  constructor(private authService: AuthService, private userService: UserService) {    
  }

  ngOnInit(): void {
    this.userAddedSubscription = this.userService.userAddeEvent.subscribe(data => {
      this.userAdded = data;
    })
  }

  onLoginClick(){
    this.authService.login();
  }
  onLogoutClick(){
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userAddedSubscription.unsubscribe();
  }
}
