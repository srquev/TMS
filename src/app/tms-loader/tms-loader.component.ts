import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tms-loader',
  templateUrl: './tms-loader.component.html',
  styleUrls: ['./tms-loader.component.scss']
})
export class TmsLoaderComponent implements OnInit {
public myForm: FormGroup;
genders=['male','female'];
  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('Sammy'),
      email: new FormControl(''),
      message: new FormControl(''),
      gender: new FormControl('female'),
      hobbies: new FormArray([])
    });
  }
  


  onSubmit(form: FormGroup) {
    console.log(form);
    
  }

  onAddHobby(){
    const control= new FormControl(null,Validators.required);
    (<FormArray>this.myForm.get('hobbies')).push(control);
  }

}
