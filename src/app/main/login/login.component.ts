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

  // accPresent: any;
  fetchedUser:any;

  submit(userdata:any) {

    if (this.role == 'admins') {
      this.as.getByEmail(userdata.email).subscribe(accPresent => {
        // this.accPresent = data;

        // console.log(this.accPresent);
        if (!accPresent) {
          alert('account is not present');
        } else {
          this.as.fetchByEmail(userdata.email).subscribe(data => {
            this.fetchedUser = data;
            if (this.fetchedUser.password == userdata.password) {
              localStorage.setItem('user',this.fetchedUser);
              localStorage.setItem('id',this.fetchedUser.id);
              localStorage.setItem('password',this.fetchedUser.password);
              localStorage.setItem('email',this.fetchedUser.email);
              localStorage.setItem('name',this.fetchedUser.name);
              localStorage.setItem('role', 'admins');
              this.router.navigate(['/admin/adminngo']);
            } else {
              alert("Wrong PassWord");
            }
          });
        }
      });
      
    } else if (this.role == 'candidates') {
      this.cs.getByEmail(userdata.email).subscribe(accPresent => {
        // this.accPresent = data;
        console.log(accPresent);
        if (!accPresent) {
          alert('account is not present');
        } else {
          this.cs.fetchByEmail(userdata.email).subscribe(data => {
            this.fetchedUser = data;
            if (this.fetchedUser.password == userdata.password) {
              localStorage.setItem('user',this.fetchedUser);
              localStorage.setItem('id',this.fetchedUser.id);
              localStorage.setItem('password',this.fetchedUser.password);
              localStorage.setItem('email',this.fetchedUser.email);
              localStorage.setItem('role', 'candidates');
              this.router.navigate(['/step/about']);
            } else {
              alert("Wrong PassWord");
            }
          });
          
        }
      });
    } else if (this.role == 'ngo') {
      this.ns.getByEmail(userdata.email).subscribe(accPresent => {
        // this.accPresent = data;
        // console.log(this.accPresent);
        if (!accPresent) {
          alert('account is not present');
        } else {
          this.ns.fetchByEmail(userdata.email).subscribe(data => {
            this.fetchedUser = data;
            if (this.fetchedUser.password == userdata.password) {
              localStorage.setItem('user',this.fetchedUser);
              localStorage.setItem('id',this.fetchedUser.nid);
              localStorage.setItem('password',this.fetchedUser.password);
              localStorage.setItem('email',this.fetchedUser.email);
              localStorage.setItem('stepStatus',this.fetchedUser.stepStatus);
              localStorage.setItem('role', 'ngo');
              this.router.navigate(['/ngoDashboard']);
            } else {
              alert("Wrong PassWord");
            }
          });
          
        }
      });
    }
  }

}
