import { Component, OnInit } from '@angular/core';
import { NGOService } from 'src/app/Services/ngo.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  
  public ngo:any[]; 
  constructor(public ms: NGOService ) {
  this.display();
  }

  ngOnInit() {
  }
     

  display() {
      this.ms. getAll().subscribe(data => {
          this.ngo = data;
          console.log(this.ngo);
      });
  }


}
