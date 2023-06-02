import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/common/services.api.service.service';

@Component({
  selector: 'app-delete-family',
  templateUrl: './delete-family.component.html',
  styleUrls: ['./delete-family.component.css']
})
export class DeleteFamilyComponent {
  familyID?:number;
  constructor(private apiSvc: ApiService, private router:Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.familyID=params['id'];
    });
  }
  deletefamily()
  {
    if(this.familyID)
    {
      this.apiSvc.deleteFamily(this.familyID).subscribe(mess=>{
        console.log(mess);
        this.router.navigateByUrl(`families`);

      }
      ,(err)=>{console.log("ERROR!")})
    }
  }
  goBack()
  {
    this.router.navigateByUrl(`families`);
  }
}
