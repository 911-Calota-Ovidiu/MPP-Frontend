import { Component, OnInit } from '@angular/core';
import { Adult } from './models/adults.models';
import { ApiService } from 'src/app/common/services.api.service.service';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  adults:Adult[]=[];

  orderedList:Adult[];

  constructor(private apiSvc: ApiService){
    this.orderedList=this.adults;
  }

  sortDirection = 'asc';

  sortBy(propertyName: string) {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    const sortOrder = this.sortDirection === 'asc' ? 1 : -1;

    this.orderedList = this.adults.sort((a, b) => {
      if (a['age'] < b['age']) {
        return -1 * sortOrder;
      }
      if (a['age'] > b['age']) {
        return 1 * sortOrder;
      }
      return 0;
    });
  }

  ngOnInit(): void {
    this.apiSvc.getAdults()
    .subscribe((result: Adult[])=>{
      this.adults=result;
    });
  }
}
