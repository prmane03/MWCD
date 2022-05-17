import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
  });

  get f(){
    return this.form.controls;
  }

  name:string;
  password:string;
  email:string;
  
  submit(){
    this.name= this.form.value['name'];
    this.email= this.form.value['email'];
    this.password= this.form.value['password'];
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
