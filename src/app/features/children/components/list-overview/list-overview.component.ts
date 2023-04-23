import { Component } from '@angular/core';
import { ApiService } from 'src/app/common/services.api.service.service';
import { Child } from '../../children.models';

@Component({
  selector: 'app-list-overview',
  templateUrl: './list-overview.component.html',
  styleUrls: ['./list-overview.component.css']
})
export class ListOverviewComponent {
  children:Child[]=[];

  orderedList:Child[];

  constructor(private apiSvc: ApiService){
    this.orderedList=this.children;
  }

  sortDirection = 'asc';

  sortBy(propertyName: string) {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    const sortOrder = this.sortDirection === 'asc' ? 1 : -1;

    this.orderedList = this.children.sort((a, b) => {
      if (a['famid'] < b['famid']) {
        return -1 * sortOrder;
      }
      if (a['famid'] > b['famid']) {
        return 1 * sortOrder;
      }
      return 0;
    });
  }
  
  ngOnInit(): void {
    this.apiSvc.getChildren()
    .subscribe((result: Child[])=>{
      this.children=result;
    });
  }
}
