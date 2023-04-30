import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/common/services.api.service.service';
import { Adult } from '../overview/models/adults.models';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  adultID?:number;
  aname?:string;
  age?:number;
  birthdate?:string;
  address?:string;
  eyeColor?:string;

  constructor(private apiSvc:ApiService, private router:Router, private activatedRoute: ActivatedRoute){}
  updateAdult(){
    this.activatedRoute.params.subscribe(params=>{
      this.adultID=params['id'];
      if(this.aname&&this.age&&this.birthdate&&this.address&&this.eyeColor)
    {
      const adult:Adult={
        aname:this.aname,
        age:this.age,
        address:this.address,
        eyeColor:this.eyeColor,
        birthdate:this.birthdate
        
      }
      this.apiSvc.updateAdult(adult,this.adultID).subscribe(result=>{
        this.router.navigateByUrl('adults');
      }
      ,(err)=>{alert("Error")}
      );
    }
    })
  }
  ngOnInit(): void {

  }
}
