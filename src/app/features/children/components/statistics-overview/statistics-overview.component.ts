import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/common/services.api.service.service';
import { Adult } from 'src/app/features/people/components/overview/models/adults.models';

@Component({
  selector: 'app-statistics-overview',
  templateUrl: './statistics-overview.component.html',
  styleUrls: ['./statistics-overview.component.css']
})
export class StatisticsOverviewComponent implements OnInit {
  avg:number=0;
  constructor(private apiSvc: ApiService){}
  ngOnInit(): void {
    this.apiSvc.getAvgChildAger()
    .subscribe((nr: number)=>{
      this.avg=nr;
    });
  }
}
