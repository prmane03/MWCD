import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { CandidateService } from 'src/app/Services/candidate.service';
import { NGOService } from 'src/app/Services/ngo.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute,public ns: NGOService ,public cs: CandidateService ,public as: AdminService ) { }

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
  
  public accPresent:boolean;
  submit(usrdata:any){
    if(this.role=='admins'){
      this.as.getByEmail( usrdata.email ).subscribe((data)=>{
        this.accPresent= data;

        console.log(this.accPresent);
        if(this.accPresent){
          alert('account is already present');
        }else{
          console.log(usrdata);
          this.as.create(usrdata).subscribe(response => alert(response));
          this.router.navigate(['/auth/login','admins']);
        }
      });
        
        
    }else if(this.role='candidates'){
      this.cs.getByEmail( usrdata.email ).subscribe(data => {
        this.accPresent = data;

        console.log(this.accPresent);
        if(this.accPresent){
          alert('account is already present');
        }else{
          console.log(JSON.stringify(usrdata));
          this.cs.create(usrdata).subscribe(response => alert(response));
          alert('registered Successfully !');
            this.router.navigate(['/auth/login','candidates']);
        }
      });

      
    }else if(this.role='ngo'){
      this.ns.getByEmail( usrdata.email ).subscribe(data => {
        this.accPresent = data;

        console.log(this.accPresent);
        if(this.accPresent){
          alert('account is already present');
        }else{
          console.log(JSON.stringify(usrdata));
          this.ns.create(usrdata).subscribe(response => alert(response));
            this.router.navigate(['/auth/login','ngo']);
        }
      });

    }    
  }

  // myItem: any;
  // storeName() {
  //   localStorage.setItem('email', 'Angular');
  //   localStorage.setItem('password', 'Angular');
  //   // this.myItem = localStorage.getItem(this.key);
  // }
  // deleteName() {
  //   localStorage.clear();
  // }
}
