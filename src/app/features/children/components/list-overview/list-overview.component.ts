import { Component } from '@angular/core';
import { ApiService } from 'src/app/common/services.api.service.service';
import { Child, ChildDTO } from '../../children.models';
import { Router } from '@angular/router';
import { UserService } from 'src/app/common/user.service.service';

@Component({
  selector: 'app-list-overview',
  templateUrl: './list-overview.component.html',
  styleUrls: ['./list-overview.component.css']
})
export class ListOverviewComponent {
  children:ChildDTO[]=[];

  orderedList:ChildDTO[];
  childCount:number=0;
  pageCount:number=0;
  currentPage:number=1;
  entPerPage:number=50;
  constructor(private apiSvc: ApiService,private router:Router,private userService:UserService){
    this.orderedList=this.children;
  }

  sortDirection = 'asc';

  sortBy(propertyName: string) {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    const sortOrder = this.sortDirection === 'asc' ? 1 : -1;

    this.orderedList = this.children.sort((a, b) => {
      if (a['age'] < b['age']) {
        return -1 * sortOrder;
      }
      if (a['age'] > b['age']) {
        return 1 * sortOrder;
      }
      return 0;
    });
  }
  goToStatistics()
  {
    this.router.navigateByUrl(`children/statistics`);
  }
  goToDelete(id:number){
    this.router.navigateByUrl(`child/delete/${id}`);
  }
  goToAdd(){
    this.router.navigateByUrl(`child/add`);
  }
  goToUpdate(id:number){
    this.router.navigateByUrl(`child/update/${id}`);
  }
  goToGetOne(id:number){
    this.router.navigateByUrl(`child/${id}`);
  }
  
  goToPage(page:number){
    this.apiSvc.getChildrenPage(page).subscribe((result: ChildDTO[])=>{
      this.children=result;
    });
    this.currentPage=page;
  }
  ngOnInit(): void {
    this.apiSvc.getChildren()
    .subscribe((result: ChildDTO[])=>{
      this.children=result;
    });
    this.apiSvc.getChildCount().subscribe((result:number)=>{
      this.childCount=result;
      this.userService.getEntitiesPerPage().subscribe((res:number)=>{
        this.entPerPage=res;
        this.pageCount=Math.ceil(result/res);
      })
    });
  }
}
