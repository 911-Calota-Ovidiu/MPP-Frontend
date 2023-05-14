import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/common/storage.service.service';
import { AuthService } from 'src/app/common/authentification.service.service';
import { NavbarService } from 'src/app/common/navbar.service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
      private router: Router,
      private storageService: StorageService,
      private authService: AuthService,
      private navbarService: NavbarService
  ) {}

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  username?: string;


  ngOnInit(): void {
    this.initialiseNavbar();

    this.navbarService.getLoginObservable().subscribe(() => {
      this.isLoggedIn = true;
      this.initialiseNavbar();
    });

    this.navbarService.getLogoutObservable().subscribe(() => {
      this.isLoggedIn = false;
      this.initialiseNavbar();
    });
  }

  initialiseNavbar(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.username = user.username;
    } 
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        this.storageService.clean();
        this.isLoggedIn = false;
        this.showAdminBoard = false;
        // window.location.reload();
      },
      error: err => {
        alert(err)
      },
      complete: () => {
        this.navbarService.logout();
      }
    });
  }

  getHeaderStyle() {
    if (this.router.url == '/home-page')
      return 'main-page-nav';
    else
      return 'bg-dark';
  }

  getLinkStyle() {

      return '';
  }

  getDropdownStyle() {

      return '';
  }

}