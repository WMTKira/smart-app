import { Component, OnInit } from '@angular/core';
import { User } from '../../class/objects';
import { CommonModule } from '@angular/common';
import { UserServiceService } from '../../service/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserListComponent implements OnInit {

  users!: User[];

  constructor(private userService: UserServiceService){}

  ngOnInit(): void {
    this.getUserList();
    console.log("getUserList")
  }

  private getUserList() {
    this.userService.getUserList().subscribe((res:any) => {
      this.users = res.data;
    });
  }

  

}
