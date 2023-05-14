import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/authentification.service.service';
import { NavbarService } from 'src/app/common/navbar.service.service';
import { StorageService } from 'src/app/common/storage.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };

  hidePassword = true;
  
  isLoggedIn = false;
  isLoginFailed = false;

  roles: string[] = [];
  username: string = ""

  constructor(
    private authService: AuthService, 
    private storageService: StorageService,
    private navbarService: NavbarService,
    private router: Router
    ) {}

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
      this.username = this.storageService.getUser().username;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        console.log(this.storageService.getUser().id);
        this.reloadPage();
      },
      error: err => {
        this.isLoginFailed = true;
      },
      complete: () => {
        this.navbarService.login();
        this.router.navigateByUrl("/");
      }
    });
  }

  reloadPage(): void {
    // window.location.reload();
  }
}