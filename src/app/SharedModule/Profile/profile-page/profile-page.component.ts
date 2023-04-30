import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  registrationForm!: FormGroup;
  skills: string[] = ['HTML', 'CSS', 'JavaScript', 'Angular', 'React', 'Vue'];

  constructor(private fb: FormBuilder) { 
    console.log("Reg form aya")
  }


  ngOnInit() {
    this.registrationForm = this.fb.group({
      role: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required],
      skills: this.buildSkills(),
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }


buildSkills() {
  const skillsArr = this.skills.map(skill => {
    return this.fb.control(false);
  });
  return this.fb.array(skillsArr);
}

passwordMatchValidator(frm: FormGroup) {
  return frm.controls['password'].value === frm.controls['confirmPassword'].value ? null : {'mismatch': true};
}

onSubmit() {
  if (this.registrationForm.valid) {
    console.log(this.registrationForm.value);
    // You can send the registration
  }

}

}
