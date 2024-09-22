import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  userName: string = ''
  password: string = ''
  isSubmitting: boolean = false
  validationErrors: string = ''

  private baseUrl = "http://localhost:8223/smart/user/v1/login"

  constructor(private httpClient: HttpClient, private router: Router) { }

  loginAction() {
    this.isSubmitting = true;
    let payload = {
      userName: this.userName,
      password: this.password
    }

    const source = this.httpClient.post(`${this.baseUrl}`, payload);

    source.pipe(catchError((err: HttpErrorResponse) => {
      return throwError(() => err);
    })).subscribe((res: any) => {
      const code = res.code;
      const msg = res.message;
      if (code === 0) {
        alert(msg);
        localStorage.setItem('UserToken', res.data.token);
        localStorage.setItem('UserName', res.data.userName);
        this.router.navigateByUrl('/main')
        console.log("Login Successful");
      } else {
        this.isSubmitting = false;
        this.validationErrors = msg;
      }
    });
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

}

