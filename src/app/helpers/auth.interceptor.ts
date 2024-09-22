import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';


export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('UserToken');
  const name = localStorage.getItem('UserName');
  const router = inject(Router);
  const clonedReq = req.clone({
    headers: req.headers
    .set('Authorization', `Bearer ${token}`)
    .set('NAME', `${name}`)
  });
  return next(clonedReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if(error.status === 401) {
        console.error('Logging Interceptor Functional Error:', error);
        localStorage.setItem('UserToken', '');
        localStorage.setItem('UserName', '');
        alert("Session time out please log in again!");
        router.navigateByUrl("/login");        
      }
      return throwError(()=> error);
    }));
}

