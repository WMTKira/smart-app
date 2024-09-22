import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Router, RouteReuseStrategy, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { User } from '../../class/objects';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-common',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './common.component.html',
  styleUrl: './common.component.css'
})
export class CommonComponent implements AfterViewInit, OnInit {
  
  sideMenu!: HTMLElement;
  menuBtn!: HTMLButtonElement;
  closeBtn!: HTMLButtonElement;
  navActive!: HTMLElement;
  currentUser: any;

  v_active!: "";
  h_active!: "";
  p_active!: "";
  m_active!: "";
  r_active!: "";
  s_active!: "";
  n_active!: "";

  private baseUrl = "http://localhost:8223/smart/user/v1/getInfo"

  constructor(private elementRef: ElementRef, private httpClient: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
     this.httpClient.get<User[]>(`${this.baseUrl}`).subscribe((res: any) => {
       if (res.code !== 0){
        localStorage.setItem('UserToken', '');
        localStorage.setItem('UserName', '');
        this.router.navigateByUrl('/login')
       }
       this.currentUser = res.data.userName;
      console.log(res);
    });
  }

  ngAfterViewInit() {
    this.sideMenu = document.querySelector('aside') as HTMLElement;
    this.menuBtn = document.getElementById('menu-btn') as HTMLButtonElement;
    this.closeBtn = document.getElementById('close-btn') as HTMLButtonElement;

    this.menuBtn.addEventListener('click', () => {
      this.sideMenu.style.display = 'block';
    });

    this.closeBtn.addEventListener('click', () => {
      this.sideMenu.style.display = 'none';
    });

    this.navActive = document.querySelector('aside') as HTMLElement;
  }

  logoutAction() {
    localStorage.removeItem('UserToken');
    localStorage.removeItem('UserName');
    this.router.navigateByUrl('/login');
    alert('Logout successful!');
    console.log("Logout Successful");
  }
}
