import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NGOService } from 'src/app/Services/ngo.service';

@Component({
  selector: 'app-add-ngo',
  templateUrl: './add-ngo.component.html',
  styleUrls: ['./add-ngo.component.css']
})
export class AddNgoComponent implements OnInit {

  constructor(private ns:NGOService) { }

  ngOnInit(): void {
  }
  // form validation
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    director: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl('', [Validators.required, Validators.minLength(25)]), 
  });

  get f(){
    return this.form.controls;
  }
submit(ngodata:any){
  this.ns.create(ngodata).subscribe(response => alert(response));
  alert('Added successfully!');

}
}
