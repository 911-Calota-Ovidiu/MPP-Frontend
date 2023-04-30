import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/common/services.api.service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  adultID?:number;
  constructor(private apiSvc: ApiService, private router:Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.adultID=params['id'];
      this.deleteAdult();
    });
  }
  deleteAdult()
  {
    if(this.adultID)
    {
      this.apiSvc.deleteAdult(this.adultID).subscribe(mess=>{
        console.log(mess);
      }
      ,(err)=>{console.log("ERROR!")})
    }
  }
}
