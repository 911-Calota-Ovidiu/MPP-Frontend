import { Component } from '@angular/core';
import { Adult, AdultDTO } from '../overview/models/adults.models';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/common/services.api.service.service';

@Component({
  selector: 'app-get-one',
  templateUrl: './get-one.component.html',
  styleUrls: ['./get-one.component.css']
})
export class GetOneComponent {
  id?:number;
  adult?:AdultDTO;
  constructor(private apiSvc: ApiService, private activatedRoute: ActivatedRoute){}
  ngOnInit(): void{
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.apiSvc.getAdultID(this.id!).subscribe((adult: AdultDTO) =>{
        this.adult = adult;
        this.adult.id = this.id!;
      })
    });
}
}
