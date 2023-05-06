import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/common/services.api.service.service';
import { Adult } from 'src/app/features/people/components/overview/models/adults.models';
import { Family } from '../families.models';

@Component({
  selector: 'app-add-family',
  templateUrl: './add-family.component.html',
  styleUrls: ['./add-family.component.css']
})
export class AddFamilyComponent {
  mom?:number;
  dad?:number;
  homeAddress?:string;
  nrOfMembers?:number;

  constructor(private apiSvc:ApiService, private router:Router){}
  addNewFamily(){
    if(this.mom&&this.dad&&this.homeAddress&&this.nrOfMembers)
    {
      const family:Family={
        mom:this.mom,
        dad:this.dad,
        homeAddress:this.homeAddress,
        nrOfMembers:this.nrOfMembers
        
      }
      this.apiSvc.addFamily(family).subscribe(result=>{
        this.router.navigateByUrl('families');
      }
      ,(err)=>{alert("Error")}
      );
    }
  }
}
