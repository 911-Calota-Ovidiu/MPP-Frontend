import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/common/services.api.service.service';
import { Adult } from '../overview/models/adults.models';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  aname?:string;
  age?:number;
  birthdate?:string;
  address?:string;
  eyeColor?:string;
  nameTooShort=false;
  constructor(private apiSvc:ApiService, private router:Router){}
  addNewAdult(){
    if(this.aname&&this.age&&this.birthdate&&this.address&&this.eyeColor)
    {
      if(this.aname.length<=3)
      {
        this.nameTooShort=true;
        return;
      }
      console.log("test was passed")
      const adult:Adult={
        aname:this.aname,
        age:this.age,
        address:this.address,
        eyeColor:this.eyeColor,
        birthdate:this.birthdate
        
      }
      this.apiSvc.addAdult(adult).subscribe(result=>{
        this.router.navigateByUrl('adults');
      }
      ,(err)=>{alert("Error")}
      );
    }
  }
}
