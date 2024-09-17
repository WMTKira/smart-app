import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserListComponent } from "./user-list/user-list.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, UserListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Smart Parking';
}
