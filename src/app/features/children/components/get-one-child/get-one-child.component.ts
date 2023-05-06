import { Component, OnInit } from '@angular/core';
import { Child, ChildDTO } from '../../children.models';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/common/services.api.service.service';
import { FamilyDTO } from 'src/app/features/families/components/families.models';

@Component({
  selector: 'app-get-one-child',
  templateUrl: './get-one-child.component.html',
  styleUrls: ['./get-one-child.component.css']
})
export class GetOneChildComponent implements OnInit{
  id?:number;
  child?:ChildDTO;
  constructor(private apiSvc: ApiService, private activatedRoute: ActivatedRoute){}
  ngOnInit(): void{
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.apiSvc.getChildID(this.id!).subscribe((child: ChildDTO) =>{
        this.child = child;
        this.child.childID = this.id!;
      })
    });
  }
}
