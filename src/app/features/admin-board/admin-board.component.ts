import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';


import { debounceTime, Subject } from 'rxjs';

import { Router } from '@angular/router';
import { StorageService } from 'src/app/common/storage.service.service';
import { SQLResponse, User, UserAdminPage } from 'src/app/common/user.model';
import { UserService } from 'src/app/common/user.service.service';
import { SqlService } from 'src/app/common/sqlservice.service';


@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.css']
})
export class AdminBoardComponent implements OnInit{

  currentUser?: User
  isLoggedIn = false;

  showEdit = false;

  selectedOption?: string;
  selectedUser?: UserAdminPage;
  searchTerm = new Subject<string>();
  options?: UserAdminPage[];

  roles = this.formBuilder.group({
    user: false,
    moderator: false,
    admin: false,
  });

  constructor (
    private storageService: StorageService,
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private sqlService:SqlService
  ) {}

  ngOnInit() {
    if(!this.storageService.isLoggedIn()) {
      alert("NO ADMIN RIGHTS"); this.onBackToHomePage() 
    } else {
      this.isLoggedIn = true;
      this.currentUser = this.storageService.getUser()
      if (!this.currentUser || !this.currentUser.roles.includes("ROLE_ADMIN")) {
        alert("NO ADMIN RIGHTS"); this.onBackToHomePage() 
      }
    }
    this.searchTerm.pipe(
      debounceTime(1000)).subscribe(term => {
        if (term.trim()) {
          this.userService.getUsersByName(term).subscribe({
            next: (users: UserAdminPage[]) => {
              this.options = users; }});
        } else { this.options = undefined; }
    });
  }

  onSelection(event: any): void {
    this.selectedOption = event.option.value.username;
    this.selectedUser = event.option.value;
    this.showEdit = true;
    console.log(this.showEdit);
    if (this.selectedUser?.roles) {
      this.roles.setValue({
        user: this.selectedUser.roles.some((role: any) => role.name === "ROLE_USER"),
        moderator: this.selectedUser.roles.some((role: any) => role.name === "ROLE_MODERATOR"),
        admin: this.selectedUser.roles.some((role: any) => role.name === "ROLE_ADMIN")
      });
    }
  }

  search(term: string): void {
    this.searchTerm.next(term);
    this.showEdit = false;
  }

  onBackToHomePage() {
    this.router.navigate(['/home-page'])
  }

  onUpdateRoles() {
    const isUser = this.roles.get('user')?.value;
    const isModerator = this.roles.get('moderator')?.value
    const isAdmin = this.roles.get('admin')?.value

    const roles = { isUser, isModerator, isAdmin }

    if (this.selectedUser) {
    this.userService.updateUserRoles(this.selectedUser.id, roles).subscribe(
      (response) => { 
        alert("Success");
        this.roles.setValue({
          user: false,
          moderator: false,
          admin: false,
        });
        this.showEdit = false;
        this.selectedOption = undefined;
        this.selectedUser = undefined;
        this.options = undefined;
      },
      (error) => { alert(error) });
    }
  }

  entitiesNumber: number = 50;

  onChangeEntitiesPerPage() {
    console.log(this.entitiesNumber)
    this.userService.changeEntitiesPerPage(this.entitiesNumber).subscribe(
      (response) => { 
        alert("Page size updated successfully");
        this.roles.setValue({
          user: false,
          moderator: false,
          admin: false,
        });
        this.showEdit = false;
        this.selectedOption = undefined;
        this.selectedUser = undefined;
        this.options = undefined;
      },
      (error) => { alert(error) });
  }
  messages: string[] = [];

  deleteAdults() {
    this.messages.push('Deleting adults...');
    this.sqlService.deleteAllAdults().subscribe({
      next: (message: SQLResponse) => {
        this.messages.push(message.message);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }

  insertAdults() {
    this.messages.push('Inserting adults...');
    this.sqlService.insertAllAdults().subscribe({
      next: (message: SQLResponse) => {
        this.messages.push(message.message);
      },
      error: (error) => {},
      complete: () => {},
    });
  }

  deleteChildren() {
    this.messages.push('Deleting children...');
    this.sqlService.deleteAllChildren().subscribe({
      next: (message: SQLResponse) => {
        this.messages.push(message.message);
      },
      error: (error) => {},
      complete: () => {},
    });
  }

  insertChildren() {
    this.messages.push('Inserting children...');
    this.sqlService.insertAllChildren().subscribe({
      next: (message: SQLResponse) => {
        this.messages.push(message.message);
      },
      error: (error) => {},
      complete: () => {},
    });
  }

  deleteFamilies() {
    this.messages.push('Deleting families...');
    this.sqlService.deleteAllFamilies().subscribe({
      next: (message: SQLResponse) => {
        this.messages.push(message.message);
      },
      error: (error) => {},
      complete: () => {},
    });
  }

  insertFamilies() {
    this.messages.push('Inserting families...');
    this.sqlService.insertAllFamilies().subscribe({
      next: (message: SQLResponse) => {
        this.messages.push(message.message);
      },
      error: (error) => {},
      complete: () => {},
    });
  }

  deleteFriends() {
    this.messages.push('Deleting friends...');
    this.sqlService.deleteAllFriends().subscribe({
      next: (message: SQLResponse) => {
        this.messages.push(message.message);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }

  insertFriends() {
    this.messages.push('Inserting friends...');
    this.sqlService.insertAllFriends().subscribe({
      next: (message: SQLResponse) => {
        this.messages.push(message.message);
      },
      error: (error) => {},
      complete: () => {},
    });
  }

  deleteAll() {
    this.messages.push('Deleting friends...');
    this.sqlService.deleteAllFriends().subscribe({
      next: (message: SQLResponse) => {
        this.messages.push(message.message);
      },
      error: (error) => {},
      complete: () => {
        this.messages.push('Deleting adults...');
        this.sqlService.deleteAllAdults().subscribe({
          next: (message: SQLResponse) => {
            this.messages.push(message.message);
          },
          error: (error) => {
            console.log(error);
          },
          complete: () => {
            this.messages.push('Deleting children...');
            this.sqlService.deleteAllChildren().subscribe({
              next: (message: SQLResponse) => {
                this.messages.push(message.message);
              },
              error: (error) => {},
              complete: () => {
                this.messages.push('Deleting families...');
                this.sqlService.deleteAllFamilies().subscribe({
                  next: (message: SQLResponse) => {
                    this.messages.push(message.message);
                  },
                  error: (error) => {
                    console.log(error);
                  },
                  complete: () => {},
                });
              },
            });
          },
        });
      },
    });
  }

  insertAll() {
    this.messages.push('Inserting adults...');
    this.sqlService.insertAllAdults().subscribe({
      next: (message: SQLResponse) => {
        this.messages.push(message.message);
      },
      error: (error) => {},
      complete: () => {
        this.messages.push('Inserting children...');
        this.sqlService.insertAllChildren().subscribe({
          next: (message: SQLResponse) => {
            this.messages.push(message.message);
          },
          error: (error) => {},
          complete: () => {
            this.messages.push('Inserting families...');
            this.sqlService.insertAllFamilies().subscribe({
              next: (message: SQLResponse) => {
                this.messages.push(message.message);
              },
              error: (error) => {},
              complete: () => {
                this.messages.push('Inserting friends...');
                this.sqlService.insertAllFriends().subscribe({
                  next: (message: SQLResponse) => {
                    this.messages.push(message.message);
                  },
                  error: (error) => {},
                  complete: () => {},
                });
              },
            });
          },
        });
      },
    });
  }

  clearConsole() {
    this.messages = [];
  }

}

