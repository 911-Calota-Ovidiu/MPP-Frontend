import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/common/services.api.service.service';
import { FamilyDTO } from '../families.models';

@Component({
  selector: 'app-get-one-family',
  templateUrl: './get-one-family.component.html',
  styleUrls: ['./get-one-family.component.css']
})
export class GetOneFamilyComponent implements OnInit{
  id?:number;
  family?:FamilyDTO;
  constructor(private apiSvc: ApiService, private activatedRoute: ActivatedRoute, private router:Router){}
  ngOnInit(): void{
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.apiSvc.getFamilyID(this.id!).subscribe((family: FamilyDTO) =>{
        this.family = family;
        this.family.famID = this.id!;
      })
    });
}
  goToAdd(id: number):void{
    this.router.navigateByUrl(`family/child/${this.id}`);
  }
}
