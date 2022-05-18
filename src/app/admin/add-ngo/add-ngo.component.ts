import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-ngo',
  templateUrl: './add-ngo.component.html',
  styleUrls: ['./add-ngo.component.css']
})
export class AddNgoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // form validation
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    dir: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  get f(){
    return this.form.controls;
  }

}
