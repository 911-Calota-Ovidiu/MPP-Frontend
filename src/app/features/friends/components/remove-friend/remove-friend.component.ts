import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/common/services.api.service.service';

@Component({
  selector: 'app-remove-friend',
  templateUrl: './remove-friend.component.html',
  styleUrls: ['./remove-friend.component.css']
})
export class RemoveFriendComponent {
  friendID?:number;
  constructor(private apiSvc: ApiService, private router:Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.friendID=params['id'];
    });
  }
  deletefriend()
  {
    if(this.friendID)
    {
      this.apiSvc.deleteFriend(this.friendID).subscribe(mess=>{
        console.log(mess);
        this.router.navigateByUrl(`friends`);

      }
      ,(err)=>{console.log("ERROR!")})
    }
  }
  goBack()
  {
    this.router.navigateByUrl(`friends`);
  }
}
