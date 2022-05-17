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

  user: any = {
    password: '',
    email: ''
  }

  userdata: any;
  accPresent: any;
  
  submit() {
    this.user.email = this.form.value['email'];
    this.user.password = this.form.value['password'];

    if (this.role == 'admins') {
      this.as.getByEmail(this.user.email).subscribe(data => {
        this.accPresent = data;
        console.log(this.accPresent);
      });
      if (!this.accPresent) {
        alert('account is not present');
      } else {
        this.as.fetchByEmail(this.user.email).subscribe(data => {
          this.userdata = data;
        });
        if (this.userdata.password == this.user.password) {
          localStorage.setItem('email', this.user.email);
          localStorage.setItem('password', this.user.password);
          localStorage.setItem('role', 'admin');
          this.router.navigate(['/auth/login', 'candidates']);
        } else {
          alert("Wrong PassWord");
        }
      }
    } else if (this.role = 'candidates') {
      this.cs.getByEmail(this.user.email).subscribe(data => {
        this.accPresent = data;
        console.log(this.accPresent);
      });
      if (!this.accPresent) {
        alert('account is not present');
      } else {
        this.cs.fetchByEmail(this.user.email).subscribe(data => {
          this.userdata = data;
        });
        if (this.userdata.password == this.user.password) {
          localStorage.setItem('email', this.user.email);
          localStorage.setItem('password', this.user.password);
          localStorage.setItem('role', 'candidate');
          this.router.navigate(['/auth/login', 'candidates']);
        } else {
          alert("Wrong PassWord");
        }
      }
    } else if (this.role = 'ngo') {
      this.ns.getByEmail(this.user.email).subscribe(data => {
        this.accPresent = data;
        console.log(this.accPresent);
      });
      if (!this.accPresent) {
        alert('account is not present');
      } else {
        this.ns.fetchByEmail(this.user.email).subscribe(data => {
          this.userdata = data;
        });
        if (this.userdata.password == this.user.password) {
          localStorage.setItem('email', this.user.email);
          localStorage.setItem('password', this.user.password);
          localStorage.setItem('role', 'ngo');
          this.router.navigate(['/auth/login', 'ngo']);
        } else {
          alert("Wrong PassWord");
        }
      }
    }
  }

}
