import { Component, OnInit } from '@angular/core';
import { Friend } from '../../friends.models';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/common/services.api.service.service';

@Component({
  selector: 'app-friends-overview',
  templateUrl: './friends-overview.component.html',
  styleUrls: ['./friends-overview.component.css']
})
export class FriendsOverviewComponent implements OnInit{
  friends?:Friend[];
  friendCount:number=0;
  pageCount:number=0;
  currentPage:number=1;

  constructor(private apiSvc: ApiService,private router:Router){
  }
  goToDelete(id:number){
    this.router.navigateByUrl(`friend/delete/${id}`);
  }
  goToAdd(){
    this.router.navigateByUrl(`friends/add`);
  }
  goToGetOne(id:number){
    this.router.navigateByUrl(`friend/${id}`)
  }
  goToPage(page:number){
    this.apiSvc.getFriendsPage(page).subscribe((result: Friend[])=>{
      this.friends=result;
    });
    this.currentPage=page;
  }
  ngOnInit(): void {
    this.apiSvc.getFriendsPage(1).subscribe((result: Friend[])=>{
      this.friends=result;
    });
    this.apiSvc.getFriendsCount().subscribe((result:number)=>{
      this.friendCount=result;
      this.pageCount=Math.ceil(result/50);
    });
  }
}
