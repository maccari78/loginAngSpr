import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { LoginuserService } from 'src/app/service/loginuser.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User = new User();

  constructor(private loginuserService: LoginuserService) { }

  ngOnInit(): void {
  }

  userLogin() {
    console.log(this.user);
    this.loginuserService.loginUser(this.user).subscribe(data => {
      alert("Login successfully");
    }, error => alert("Sorry please enter correct UserID and Password"));
  }

}
