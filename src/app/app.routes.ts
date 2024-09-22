import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { authGuard } from './helpers/auth.guard';
import { mainGuard } from './helpers/main.guard';
import { UserListComponent } from './pages/user-list/user.component';
import { CommonComponent } from './pages/common/common.component';
import { ParkingComponent } from './pages/parking/parking.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, canActivate: [authGuard]},
    { path: '', component: CommonComponent, children: [
        { path: 'main', component: MainComponent, canActivate: [mainGuard]},
        { path: 'parking', component: ParkingComponent, canActivate: [mainGuard]},
        { path: 'user', component: UserListComponent, canActivate: [mainGuard]}
    ]}
    
];
