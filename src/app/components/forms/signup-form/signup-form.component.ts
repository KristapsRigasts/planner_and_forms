import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SignupDetails} from "../../../shared/models/signup.model";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  @Input()
  exampleValue2?: string;

  @Output()
  signupEvent = new EventEmitter<SignupDetails>();

  signupForm = new FormGroup({});

  countries = [
    {
      title: 'Latvia',
      countryCode: 'LV'
    },
    {
      title: 'Estonia',
      countryCode: 'EST'
    },
    {
      title: 'Lithuania',
      countryCode: 'LT'
    }
  ];

  genders = [
    {
      gender: 'Male'
    },
    {
      gender: 'Female'
    }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      gender: [''],
      country: [''],
      verify: ['', [Validators.required]]
    })
  }

  signup(): void {
    // console.log(this.exampleValue2);
    this.signupForm.markAllAsTouched();

    if(this.signupForm.valid){
      //sutam datus uz serveri
      this.signupEvent.emit(this.signupForm.value);
      // console.log(this.signupForm.value);
    }
  }
}
