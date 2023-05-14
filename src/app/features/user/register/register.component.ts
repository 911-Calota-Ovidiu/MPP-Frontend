import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/authentification.service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  confirmationToken = '';

  form: any = {
    username: null,
    password: null
  };

  hidePassword = true;

  isSuccessful = false;
  isSignUpFailed = false;

  constructor(
    private router: Router,
    private authService: AuthService
    ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { username, password } = this.form;
    this.authService.register(username, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.confirmationToken = data.jwtToken;
      },
      error: err => {
        this.isSignUpFailed = true;
      }
    });
  }

  onConfirmRegistration() {
    this.authService.confirmRegistration(this.confirmationToken).subscribe({
      next: data => {
        alert("Accouunt creation was a success");
        this.onBackToHomePage();
      },
      error: err => {
        alert(err);
        this.onBackToHomePage();
      }
    });
  }

  onBackToHomePage() {
    this.router.navigate(['/home-page'])
  }

}