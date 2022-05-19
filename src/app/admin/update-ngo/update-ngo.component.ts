import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NGOService } from 'src/app/Services/ngo.service';

@Component({
  selector: 'app-update-ngo',
  templateUrl: './update-ngo.component.html',
  styleUrls: ['./update-ngo.component.css']
})
export class UpdateNgoComponent implements OnInit {

  constructor(private ns:NGOService,private route: ActivatedRoute,private router:Router) { }

  id: number;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    }); 
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
    this.ns.update(this.id,ngodata).subscribe(response => alert(response));
    alert('Updated successfully!');
    this.router.navigate(['/admin/adminngo'],);
  }

}
