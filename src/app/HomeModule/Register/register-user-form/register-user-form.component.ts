import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user-form',
  templateUrl: './register-user-form.component.html',
  styleUrls: ['./register-user-form.component.css']
})
export class RegisterUserFormComponent implements OnInit {

  registrationForm!: FormGroup;
  skills: string[] = ['HTML', 'CSS', 'JavaScript', 'Angular', 'React', 'Vue'];
  selectedSkills: string[] = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      role: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required],
      skills: this.fb.group({
        HTML: [false],
        CSS: [false],
        JavaScript: [false],
        Angular: [false],
        React: [false],
        Vue: [false]
      }),
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
    this.registrationForm.get('skills')?.valueChanges.subscribe(val => {
      this.selectedSkills = Object.keys(val).filter(key => val[key]);
    });
  }


// buildSkills() {
//   const skillsArr = this.skills.map(skill => {
//     return this.fb.control(false);
//   });
//   return this.fb.array(skillsArr);
// }

passwordMatchValidator(frm: FormGroup) {
  return frm.controls['password'].value === frm.controls['confirmPassword'].value ? null : {'mismatch': true};
}

onSubmit() {
  if (this.registrationForm.valid) {
    console.log(this.registrationForm.value);
   console.log(this.registrationForm.value)
  }

}

}
