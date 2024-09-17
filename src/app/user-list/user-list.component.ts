import { Component, OnInit } from '@angular/core';
import { User } from '../class/user';
import { CommonModule } from '@angular/common';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {

  users!: User[];

  constructor(private userService: UserServiceService){}

  ngOnInit(): void {
    this.getUserList();
  }

  private getUserList() {
    this.userService.getUserList().subscribe(x => {
      this.users = x;
    });
  }

  

}
