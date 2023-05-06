import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/common/services.api.service.service';
import { Child } from '../../children.models';

@Component({
  selector: 'app-update-child',
  templateUrl: './update-child.component.html',
  styleUrls: ['./update-child.component.css']
})
export class UpdateChildComponent {
  childID?:number;
  name?:string;
  age?:number;
  birthdate?:string;
  address?:string;
  eyeColor?:string;
  family?:number;
  constructor(private apiSvc:ApiService, private router:Router, private activatedRoute: ActivatedRoute){}
  updateChild(){
    this.activatedRoute.params.subscribe(params=>{
      this.childID=params['id'];
      if(this.name&&this.age&&this.birthdate&&this.address&&this.eyeColor&&this.family)
    {
      const child:Child={
        name:this.name,
        age:this.age,
        address:this.address,
        eyeColor:this.eyeColor,
        birthdate:this.birthdate,
        family:this.family
        
      }
      this.apiSvc.updateChild(child,this.childID).subscribe(result=>{
        this.router.navigateByUrl('children');
      }
      ,(err)=>{alert("Error")}
      );
    }
    })
  }
  ngOnInit(): void {

  }
}
