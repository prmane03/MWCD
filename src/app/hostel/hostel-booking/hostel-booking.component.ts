import { Component, OnInit } from '@angular/core';
import { HostelService } from 'src/app/Services/hostel.service';

@Component({
  selector: 'app-hostel-booking',
  templateUrl: './hostel-booking.component.html',
  styleUrls: ['./hostel-booking.component.css']
})
export class HostelBookingComponent implements OnInit {

  constructor(private hostelService: HostelService) { }
  users: any;
  ngOnInit(): void {
    this.getHostel();
  }
  public getHostel(): void {
    this.hostelService.getAll().subscribe((data) => {

      this.users = data
      console.log(this.users)
    }
    )
  }
  public vacancyDecrementer(id:number): void {
    let newId =this.users.filter( (x: { id: number; }) => x.id==id);
    newId[0].vacancy-=1;
    console.log(newId)
    this.hostelService.update(id,newId[0]).subscribe( response => {console.log(response)})
  }

}
