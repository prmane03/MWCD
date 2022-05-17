import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HostelService } from 'src/app/Services/hostel.service';

@Component({
  selector: 'app-hostel',
  templateUrl: './hostel.component.html',
  styleUrls: ['./hostel.component.css']
})
export class HostelComponent implements OnInit {
  

  constructor(private hostelService : HostelService) { }

  ngOnInit(): void {
    
  }
  
}
