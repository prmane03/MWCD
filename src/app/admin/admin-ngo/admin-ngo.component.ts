import { Component, OnInit } from '@angular/core';
import { NGOService } from 'src/app/Services/ngo.service';

@Component({
  selector: 'app-admin-ngo',
  templateUrl: './admin-ngo.component.html',
  styleUrls: ['./admin-ngo.component.css']
})
export class AdminNgoComponent implements OnInit {

  public ngo:any[]; 
  constructor(public ms: NGOService ) {
  this.display();
  }

  ngOnInit() {
  }
     

  display() {
      this.ms.getAll().subscribe(data => {
          this.ngo = data;
          console.log(this.ngo);
      });
  } 

}
