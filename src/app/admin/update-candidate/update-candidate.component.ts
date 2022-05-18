import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from 'src/app/Services/candidate.service';

@Component({
  selector: 'app-update-candidate',
  templateUrl: './update-candidate.component.html',
  styleUrls: ['./update-candidate.component.css']
})
export class UpdateCandidateComponent implements OnInit {

  constructor(private cs:CandidateService,private route: ActivatedRoute) { }

  id: number;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getdata();
    }); 
  }

  // form validation
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    fathername: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  get f(){
    return this.form.controls;
  }

  candidate :any;
  getdata(){
    this.cs.getById(this.id).subscribe(response => this.candidate = response);
  }

  submit(candidatedata:any){
    this.cs.update(this.id,candidatedata).subscribe(response => alert(response));
    alert('Updated successfully!');
  
  }

}


