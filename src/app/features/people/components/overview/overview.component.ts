import { Component, OnInit } from '@angular/core';
import { Adult, AdultDTO } from './models/adults.models';
import { ApiService } from 'src/app/common/services.api.service.service';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  adults:AdultDTO[]=[];
  orderedList:AdultDTO[];
  adultCount:number=0;
  pageCount:number=0;
  currentPage:number=1;
  constructor(private apiSvc: ApiService,private router:Router){
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
  goToDelete(id:number){
    this.router.navigateByUrl(`adult/delete/${id}`);
  }
  goToAdd(){
    this.router.navigateByUrl(`adult/add`);
  }
  goToUpdate(id:number){
    this.router.navigateByUrl(`adult/update/${id}`);
  }
  goToGetOne(id:number){
    this.router.navigateByUrl(`adult/${id}`)
  }
  goToPage(page:number){
    this.apiSvc.getAdultsPage(page).subscribe((result: AdultDTO[])=>{
      this.adults=result;
    });
    this.currentPage=page;
  }
  ngOnInit(): void {
    this.apiSvc.getAdults().subscribe((result: AdultDTO[])=>{
      this.adults=result;
    });
    this.apiSvc.getAdultCount().subscribe((result:number)=>{
      this.adultCount=result;
      this.pageCount=Math.ceil(result/50);
    });
  }
}
