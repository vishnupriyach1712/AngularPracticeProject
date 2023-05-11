import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataManagementService } from '../../Services/DataManagement/data-management.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  registrationForm!: FormGroup;
  userEmail: string;
  role: string;
  selectedSkills: string[] = [];
  skillsList: string[] = ['HTML', 'CSS', 'JavaScript', 'Angular', 'React', 'Vue',];

  constructor(
    public dataService: DataManagementService,
    private fb: FormBuilder,
    private router: Router
  ) {
    const state = this.router.getCurrentNavigation()?.extras.state as {
      email: string;
    };
    this.userEmail = state.email;
    console.log(this.userEmail);
  }

  ngOnInit() {
    let user = this.dataService.findUserByEmail(this.userEmail);
    this.role = user.role;
    this.registrationForm = this.fb.group({
      role: [user?.role, Validators.required],
      userName: [user?.userName, Validators.required],
      email: [user?.email, [Validators.required, Validators.email]],
      contact: [user?.contact, Validators.required],
      skills: this.fb.group({
        HTML: [false],
        CSS: [false],
        JavaScript: [false],
        Angular: [false],
        React: [false],
        Vue: [false]
      }),
    });
    this.registrationForm.get('skills')?.valueChanges.subscribe(val => {
      this.selectedSkills = Object.keys(val).filter(key => val[key]);
    });
  }


  passwordMatchValidator(frm: FormGroup) {
    return frm.controls['password'].value ===
      frm.controls['confirmPassword'].value
      ? null
      : { mismatch: true };
  }

  updateUser() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      console.log(this.dataService.updateUser(this.registrationForm.value));
      let info= JSON.parse(localStorage.getItem('loginInfo') || '{}')
      this.router.navigate(['user/userDash/profile'], {
        state: { email: info.email },
      });
    }
  }
}
