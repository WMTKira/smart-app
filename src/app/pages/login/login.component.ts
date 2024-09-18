import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: Login;
  private baseUrl = "http://localhost:8080/smart/user/v1/login"

  constructor(private httpClient: HttpClient, private router: Router) {
    this.loginForm = new Login('', '');
  }
  
  onLogin() {
     this.httpClient.post(`${this.baseUrl}`, this.loginForm).subscribe((res:any) => {
      const status = res.status;
      const msg = res.message;
      if (status === 200) {
        alert(msg);
        localStorage.setItem('UserToken', res.data.token);
        this.router.navigateByUrl('/main')
        console.log("Login Successful");
      } else {
        alert(msg);
        console.log("Login Failed");
      }
    });
  }

}

export class Login {

  userName: string;
  password: string;

  constructor(userName: string, password: string) {
    this.userName = userName;
    this.password = password;

  }

}
