import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-navbar',
  templateUrl: './step-navbar.component.html',
  styleUrls: ['./step-navbar.component.css']
})
export class StepNavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
