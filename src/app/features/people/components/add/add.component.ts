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
  name?:string;
  age?:number;
  birthdate?:string;
  address?:string;
  eyecolor?:string;

  constructor(private apiSvc:ApiService, private router:Router){}
  addAdult(){
    if(this.name&&this.age&&this.birthdate&&this.address&&this.eyecolor)
    {
      const adult:Adult={
        name:this.name,
        age:this.age,
        address:this.address,
        eyecolor:this.eyecolor,
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
