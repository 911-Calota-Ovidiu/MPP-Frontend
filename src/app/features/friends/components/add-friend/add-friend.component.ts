import { Component } from '@angular/core';
import { ChildDTO } from 'src/app/features/children/children.models';
import { Friend, FriendDTO } from '../../friends.models';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/common/services.api.service.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent {
  person?:number;
  friends?:number;

  constructor(private apiSvc:ApiService, private router:Router){}
  addNewFriend(){
    if(this.person&&this.friends)
    {

      this.apiSvc.addFriend(this.person,this.friends).subscribe(result=>{
        this.router.navigateByUrl('friends');
      }
      ,(err)=>{alert("Error")}
      );
    }
  }
}
