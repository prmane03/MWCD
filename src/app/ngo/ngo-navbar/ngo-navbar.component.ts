import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngo-navbar',
  templateUrl: './ngo-navbar.component.html',
  styleUrls: ['./ngo-navbar.component.css']
})
export class NgoNavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
