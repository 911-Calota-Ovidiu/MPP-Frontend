import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/common/services.api.service.service';
import { Family } from '../families.models';

@Component({
  selector: 'app-update-family',
  templateUrl: './update-family.component.html',
  styleUrls: ['./update-family.component.css']
})
export class UpdateFamilyComponent {
  familyID?:number;
  mom?:number;
  dad?:number;
  homeAddress?:string;
  nrOfMembers?:number;

  constructor(private apiSvc:ApiService, private router:Router, private activatedRoute: ActivatedRoute){}
  updateFamily(){
    this.activatedRoute.params.subscribe(params=>{
      this.familyID=params['id'];
      if(this.mom&&this.dad&&this.homeAddress&&this.nrOfMembers)
    {
      const family:Family={
        mom:this.mom,
        dad:this.dad,
        homeAddress:this.homeAddress,
        nrOfMembers:this.nrOfMembers        
      }
      this.apiSvc.updateFamily(family,this.familyID).subscribe(result=>{
        this.router.navigateByUrl('families');
      }
      ,(err)=>{alert("Error")}
      );
    }
    })
  }
  ngOnInit(): void {

  }
}
