import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/common/services.api.service.service';
import { Child } from 'src/app/features/children/children.models';

@Component({
  selector: 'app-add-child-family',
  templateUrl: './add-child-family.component.html',
  styleUrls: ['./add-child-family.component.css']
})
export class AddChildFamilyComponent implements OnInit{
  child?:number;
  family?:number;
  constructor(private apiSvc: ApiService, private activatedRoute: ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.family = params['id'];
      console.log(this.family);
      
    });
}
  addNewChildFamily(){
    if(this.child&&this.family)
    {
      console.log(this.child);
      this.apiSvc.addChildtoFamily(this.child,this.family).subscribe(result=>{
        this.router.navigateByUrl('families');
      }
      ,(err)=>{alert("Error")}
      );
    }
  }
}
