import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { authGuard } from './helpers/auth.guard';
import { mainGuard } from './helpers/main.guard';
import { UserListComponent } from './pages/user-list/user-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainComponent, canActivate: [mainGuard]},
    { path: 'login', component: LoginComponent, canActivate: [authGuard]},
    { path: 'user', component: UserListComponent, canActivate: [mainGuard]},
];
