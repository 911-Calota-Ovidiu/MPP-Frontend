import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Adult, AdultDTO } from './models/adults.models';
import { ApiService } from 'src/app/common/services.api.service.service';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { UserService } from 'src/app/common/user.service.service';

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
  entPerPage:number=50;
  constructor(private apiSvc: ApiService,private router:Router,private userService:UserService){
    this.orderedList=this.adults;
  }

  sortDirection = 'asc';
  filterAge?:number;
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
      this.userService.getEntitiesPerPage().subscribe((res:number)=>{
        this.entPerPage=res;
        this.pageCount = Math.ceil(this.adultCount / res);
      }
      )
    });
    
  }
  onFilterClick()
  {
    if (this.filterAge){
    this.loadAdults();}
    else this.ngOnInit();
  }
  loadAdults() {
    this.apiSvc.getAdultAgePage(this.filterAge,this.currentPage).subscribe((result: AdultDTO[])=>{
      this.adults=result;
    });
    this.apiSvc.getAdultAgeCount(this.filterAge).subscribe((result:number)=>{
      this.adultCount=result;
      this.userService.getEntitiesPerPage().subscribe((res:number)=>{
        this.entPerPage=res;
        this.pageCount = Math.ceil(this.adultCount / res);
      }
      )
    });
  }
}
