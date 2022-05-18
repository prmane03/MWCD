import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NGOService } from 'src/app/Services/ngo.service';

@Component({
  selector: 'app-ngoregister',
  templateUrl: './ngoregister.component.html',
  styleUrls: ['./ngoregister.component.css']
})
export class NgoregisterComponent implements OnInit {

  constructor(private route: ActivatedRoute, public ns: NGOService,private router: Router) { }
  ngoid:any ;
  role:string;
  // stepStatus:any;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.role=params['type'];
      this.ngoid=localStorage.getItem('id');
    //  this.stepStatus=localStorage.getItem('stepStatus');
    });
  }
  

  // form validation
  form = new FormGroup({
    // name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    // email: new FormControl('', [Validators.required, Validators.email]),
    director: new FormControl('', [Validators.required, Validators.minLength(3)]),
    addressLine: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),


  });

  get f(){
    return this.form.controls;
  }




  submit(ngodata:any){

  
        ngodata['stepStatus']='Registered';
        ngodata['name']=localStorage.getItem('name');
        ngodata['email']=localStorage.getItem('email');
        ngodata['password']=localStorage.getItem('password');
        this.ns.update(this.ngoid,ngodata).subscribe(response => alert(response));
          alert('registered Successfully !');
          localStorage.setItem('stepStatus','Registered');
          this.router.navigate(['/ngoDashboard/ngoregister']); 

  }

  
}


  

