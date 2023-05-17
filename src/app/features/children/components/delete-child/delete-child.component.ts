import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/common/services.api.service.service';

@Component({
  selector: 'app-delete-child',
  templateUrl: './delete-child.component.html',
  styleUrls: ['./delete-child.component.css']
})
export class DeleteChildComponent {
  childID?:number;
  constructor(private apiSvc: ApiService, private router:Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.childID=params['id'];
      this.deleteChild();
    });
  }
  deleteChild()
  {
    if(this.childID)
    {
      this.apiSvc.deleteChild(this.childID).subscribe(mess=>{
        console.log(mess);
      }
      ,(err)=>{console.log("ERROR!")})
    }
  }
  goBack()
  {
    this.router.navigateByUrl(`children`);
  }
}
