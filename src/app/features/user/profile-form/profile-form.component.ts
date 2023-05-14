import { Component, OnInit } from '@angular/core';



import { Router } from '@angular/router';
import { from } from 'rxjs';
import { StorageService } from 'src/app/common/storage.service.service';
import { User, UserProfile } from 'src/app/common/user.model';
import { UserService } from 'src/app/common/user.service.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  currentUser!: User;
  userProfile?: UserProfile;
  usernameActivatedRoute?: string;

  numberOfAdults?: Number;
  numberOfChildren?: Number;
  numberOfFamilies?: Number;

  submitted = false;

  genders = ['male', 'female']
  maritalStatuses = ['single', 'married']

  constructor(
    private storageService: StorageService,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    if (!this.storageService.isLoggedIn()){
      alert("Please Log In"); this.onBackToHomePage() 
    }
    else {
      this.currentUser = this.storageService.getUser();
      if (this.currentUser) {
        this.userService.getUserProfileById(this.currentUser.id).subscribe(
          (response) => { this.userProfile = response;},
          (error) => alert(error))
        }
    }
  }

  onSubmit() { 
    this.submitted = true; 
    console.log("Reach")
    if (this.userProfile) {
      this.userService.updateUserProfile(this.userProfile, Number(this.currentUser.id)).subscribe(
        (response) => { alert("Profile updated successfully"); this.onBackToProfilePage()},
        (error) => { alert(error) });
    }
  }

  onBackToProfilePage() {
    this.router.navigate(['/profile'])
  }

  onBackToHomePage() {
    this.router.navigate(['/home-page'])
  }

}