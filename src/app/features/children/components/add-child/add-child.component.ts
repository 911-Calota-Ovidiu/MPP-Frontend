import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/common/services.api.service.service';
import { Adult } from 'src/app/features/people/components/overview/models/adults.models';
import { Child } from '../../children.models';

@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.css']
})
export class AddChildComponent {
  name?:string;
  age?:number;
  birthdate?:string;
  address?:string;
  eyeColor?:string;
  family:number=1;
  nameTooShort=false;
  constructor(private apiSvc:ApiService, private router:Router){}
  addNewChild(){
    if(this.name&&this.age&&this.birthdate&&this.address&&this.eyeColor&&this.family)
    {
      if(this.name.length<=3)
      {
        this.nameTooShort=true;
        return;
      }
      const child:Child={
        name:this.name,
        age:this.age,
        address:this.address,
        eyeColor:this.eyeColor,
        birthdate:this.birthdate,
        family:this.family
      }
      console.log(
        child.name,
        child.age,
        child.address,
        child.eyeColor,
        child.birthdate,
        child.family
        )
      this.apiSvc.addChild(child).subscribe(result=>{
        this.router.navigateByUrl('children');
      }
      ,(err)=>{alert("Error")}
      );
    }
  }
}
