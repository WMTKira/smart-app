import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const mainGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('UserToken');
  if (!token) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
