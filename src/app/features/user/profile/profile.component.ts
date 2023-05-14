import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/common/storage.service.service';
import { User, UserProfile } from 'src/app/common/user.model';
import { UserService } from 'src/app/common/user.service.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser?: User;
  userProfile?: UserProfile;
  usernameActivatedRoute?: string;

  numberOfAdults?: Number;
  numberOfChildren?: Number;
  numberOfFamilies?: Number;
  numberOfFriends?: Number;
  loggedIn = true;

  constructor(
    private storageService: StorageService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.usernameActivatedRoute = params['username']
      if (this.usernameActivatedRoute) {
        this.userService.getUserByUsername(this.usernameActivatedRoute).subscribe(
          (response) => { this.currentUser = response; this.getStatistics();},
          (error) => alert(error))
        this.userService.getUserProfileByUsername(this.usernameActivatedRoute).subscribe(
          (response) => { this.userProfile = response;},
          (error) => alert(error))
      }
      else {
        if (!this.storageService.isLoggedIn())
          this.loggedIn = false;
        else {
          this.currentUser = this.storageService.getUser();
          this.getStatistics();
          if (this.currentUser) {
            this.userService.getUserProfileById(this.currentUser.id).subscribe(
              (response) => { this.userProfile = response;},
              (error) => alert(error))
            }
        }
      }
    });
  }

  getStatistics() {
    if (this.currentUser) {
      this.userService.getNumberOfAdults(this.currentUser.id).subscribe(
        (response) => { this.numberOfAdults = response;},
        (error) => alert(error))
      this.userService.getNumberOfChildren(this.currentUser.id).subscribe(
        (response) => { this.numberOfChildren = response;},
        (error) => alert(error))
      this.userService.getNumberOfFamilies(this.currentUser.id).subscribe(
        (response) => { this.numberOfFamilies = response;},
        (error) => alert(error))
      this.userService.getNumberOfFriends(this.currentUser.id).subscribe(
        (response) => { this.numberOfFriends = response;},
        (error) => alert(error))
      }
      
  }

  isUserMale() {
    if (this.userProfile && this.userProfile.gender == 'male')
      return true;
    return false;
  }

  isProfileEditable() {
    if (this.storageService.getUser().username == this.currentUser?.username)
      return true;
    return false;
  }

  navigateToProfileEdit() {
    this.router.navigate(['/profile-edit'])
    
  }

}