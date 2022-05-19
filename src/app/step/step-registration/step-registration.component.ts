import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateService } from 'src/app/Services/candidate.service';

@Component({
  selector: 'app-step-registration',
  templateUrl: './step-registration.component.html',
  styleUrls: ['./step-registration.component.css']
})
export class StepRegistrationComponent implements OnInit {

  constructor(private cs: CandidateService, private router: Router) { }


  ngOnInit(): void {
  }
  // form validation
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    fathername: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  get f() {
    return this.form.controls;
  }

  id: any;
  submit(formdata: any) {
    this.id = localStorage.getItem('id');
    this.cs.update(this.id, formdata).subscribe(response => alert(response));
    alert('Added successfully!');
    this.router.navigate(['/admin/candidate'],);
  }

}
