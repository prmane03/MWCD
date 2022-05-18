import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-ngo',
  templateUrl: './update-ngo.component.html',
  styleUrls: ['./update-ngo.component.css']
})
export class UpdateNgoComponent implements OnInit {

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
