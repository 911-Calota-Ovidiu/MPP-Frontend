import { Component, OnInit } from '@angular/core';
import { Adult } from './models/adults.models';
import { ApiService } from 'src/app/common/services.api.service.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  adults:Adult[]=[];
  constructor(private apiSvc: ApiService){}
  ngOnInit(): void {
    this.apiSvc.getAdults()
    .subscribe((result: Adult[])=>{
      this.adults=result;
    });
  }
}
