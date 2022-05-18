import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NGOService } from 'src/app/Services/ngo.service';

@Component({
  selector: 'app-ngoregister',
  templateUrl: './ngoregister.component.html',
  styleUrls: ['./ngoregister.component.css']
})
export class NgoregisterComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

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
    director: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  get f(){
    return this.form.controls;
  }

  name:string;
  password:string;
  email:string;
  director:string;
  addressLine:string;
  city:string;
  state:string;
  country:string;
  type:string;
  
  submit(){
    this.name= this.form.value['name'];
    this.email= this.form.value['email'];
    this.password= this.form.value['password'];
    this.director= this.form.value['director'];
    this.addressLine= this.form.value['adressLine'];
    this.city= this.form.value['city'];
    this.state= this.form.value['state'];
    this.country= this.form.value['country'];
    this.type= this.form.value['type'];

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
