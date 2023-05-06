import { Component, OnInit } from '@angular/core';
import { Friend } from '../../friends.models';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/common/services.api.service.service';

@Component({
  selector: 'app-get-one-friend',
  templateUrl: './get-one-friend.component.html',
  styleUrls: ['./get-one-friend.component.css']
})
export class GetOneFriendComponent implements OnInit{
  id?:number;
  friend?:Friend;
  constructor(private apiSvc: ApiService, private activatedRoute: ActivatedRoute, private router:Router){}
  ngOnInit(): void{
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.apiSvc.getOneFriend(this.id!).subscribe((friend: Friend) =>{
        this.friend = friend;
        this.friend.id = this.id!;
      })
    });
}
}
