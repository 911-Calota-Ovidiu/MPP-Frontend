import { Component, OnInit } from '@angular/core';
import { FamilyDTO } from '../families.models';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/common/services.api.service.service';
import { AdultDTO } from 'src/app/features/people/components/overview/models/adults.models';

@Component({
  selector: 'app-families-list-overview',
  templateUrl: './families-list-overview.component.html',
  styleUrls: ['./families-list-overview.component.css']
})
export class FamiliesListOverviewComponent implements OnInit{
  families:FamilyDTO[]=[];
  adultCount:number=0;
  pageCount:number=0;
  currentPage:number=1;
  constructor(private apiSvc: ApiService,private router:Router){
  }
  goToDelete(id:number){
    this.router.navigateByUrl(`family/delete/${id}`);
  }
  goToAdd(){
    this.router.navigateByUrl(`family/add`);
  }
  goToUpdate(id:number){
    this.router.navigateByUrl(`family/update/${id}`);
  }
  goToGetOne(id:number){
    this.router.navigateByUrl(`family/${id}`)
  }
  goToPage(page:number){
    this.apiSvc.getFamiliesPage(page).subscribe((result: FamilyDTO[])=>{
      this.families=result;
    });
    this.currentPage=page;
  }
  ngOnInit(): void {
    this.apiSvc.getFamilies().subscribe((result: FamilyDTO[])=>{
      this.families=result;
    });
    this.apiSvc.getFamilyCount().subscribe((result:number)=>{
      this.adultCount=result;
      this.pageCount=Math.ceil(result/10);
    });
  }
}
