import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserListComponent } from "./pages/user-list/user-list.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, UserListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Smart Parking';
}
