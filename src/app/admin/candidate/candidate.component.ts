import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/Services/candidate.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  public candidate:any; 
  constructor(public cs: CandidateService ) {
  this.display();
  }


  ngOnInit(): void {
  }
  display() {
    this.cs.getAll().subscribe(data => {
        this.candidate = data;
        console.log(this.candidate);
    });
}
}
