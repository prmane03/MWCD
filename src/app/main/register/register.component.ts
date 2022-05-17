import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { CandidateService } from 'src/app/Services/candidate.service';
import { NGOService } from 'src/app/Services/ngo.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route: ActivatedRoute,public ns: NGOService ,public cs: CandidateService ,public as: AdminService ) { }

  role:string;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.role=params['type'];
    });
  }

  // form validation
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  get f(){
    return this.form.controls;
  }

  name:string;
  password:string;
  email:string;
  
  accPresent:any;
  submit(){
    this.name= this.form.value['name'];
    this.email= this.form.value['email'];
    this.password= this.form.value['password'];
    if(this.role=='admins'){
        this.as.getByEmail( this.email ).subscribe(data => {
          this.accPresent = data;
          console.log(this.accPresent);
        });
        if(this.accPresent){
          alert('account is already present');
        }else{
          
        }
    }else if(this.role='candidates'){
      this.cs.getByEmail( this.email ).subscribe(data => {
        this.accPresent = data;
        console.log(this.accPresent);
      });
    }else if(this.role='ngo'){
      this.ns.getByEmail( this.email ).subscribe(data => {
        this.accPresent = data;
        console.log(this.accPresent);
      });
    }    
  }

  myItem: any;
  storeName() {
    localStorage.setItem('email', 'Angular');
    localStorage.setItem('password', 'Angular');
    // this.myItem = localStorage.getItem(this.key);
  }
  deleteName() {
    localStorage.clear();
  }
}
