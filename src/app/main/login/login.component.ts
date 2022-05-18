import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { CandidateService } from 'src/app/Services/candidate.service';
import { NGOService } from 'src/app/Services/ngo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, public ns: NGOService, public cs: CandidateService, public as: AdminService) { }

  role: string;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.role = params['type'];
    }); 
  }

  // form validation
  form = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  get f() {
    return this.form.controls;
  }

  accPresent: any;
  fetchedUser:any;

  submit(userdata:any) {

    if (this.role == 'admins') {
      this.as.getByEmail(userdata.email).subscribe(data => {
        this.accPresent = data;

        console.log(this.accPresent);
        if (!this.accPresent) {
          alert('account is not present');
        } else {
          this.as.fetchByEmail(userdata.email).subscribe(data => {
            this.fetchedUser = data;
            if (this.fetchedUser.password == userdata.password) {
              localStorage.setItem('email', userdata.email);
              localStorage.setItem('password', userdata.password);
              localStorage.setItem('role', 'admin');
              this.router.navigate(['/admin/adminngo']);
            } else {
              alert("Wrong PassWord");
            }
          });
        }
      });
      
    } else if (this.role = 'candidates') {
      this.cs.getByEmail(userdata.email).subscribe(data => {
        this.accPresent = data;
        console.log(this.accPresent);
      });
      if (!this.accPresent) {
        alert('account is not present');
      } else {
        this.cs.fetchByEmail(userdata.email).subscribe(data => {
          this.fetchedUser = data;
          if (this.fetchedUser.password == userdata.password) {
            localStorage.setItem('email', userdata.email);
            localStorage.setItem('password', userdata.password);
            localStorage.setItem('role', 'candidate');
            this.router.navigate(['/step/training-sectors']);
          } else {
            alert("Wrong PassWord");
          }
        });
        
      }
    } else if (this.role = 'ngo') {
      this.ns.getByEmail(userdata.email).subscribe(data => {
        this.accPresent = data;
        console.log(this.accPresent);
      });
      if (!this.accPresent) {
        alert('account is not present');
      } else {
        this.ns.fetchByEmail(userdata.email).subscribe(data => {
          this.fetchedUser = data;
          if (this.fetchedUser.password == userdata.password) {
            localStorage.setItem('email', userdata.email);
            localStorage.setItem('password', userdata.password);
            localStorage.setItem('role', 'ngo');
            this.router.navigate(['/ngoDashboard']);
          } else {
            alert("Wrong PassWord");
          }
        });
        
      }
    }
  }

}
