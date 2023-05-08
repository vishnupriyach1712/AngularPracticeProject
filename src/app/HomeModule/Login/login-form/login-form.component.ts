import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ChangeLanguageService } from 'src/app/Services/Language/change-language.service';
import { AuthService } from 'src/app/Services/AuthService/auth.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  //userType: string = 'user';

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      let user = this.authService.login(
        this.loginForm.value.email,
        this.loginForm.value.password
      );
      if (user.isAdmin == true) {
        this.router.navigate(['admin/adminDash/list']);
      } else {
        this.router.navigate(['user/userDash/profile']);
      }
      // this.route.(['/home/register']);
    }
  }

  browserLang: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private langService: ChangeLanguageService,
    public translate: TranslateService,
    private authService: AuthService
  ) {
    this.translate.use(this.langService.selectedLanguage.value);
  }
}
