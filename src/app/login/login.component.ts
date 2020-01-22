import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
import { AuthService } from "angularx-social-login";
import { LoginService } from '../services/login.service';
import Swal from "sweetalert2";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(private router: Router, private authService: AuthService, private logService: LoginService, private fb: FormBuilder, private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.loginForm = fb.group({
      'Email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', [Validators.required, Validators.minLength(8), Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]]
    });
  }
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }
  onSubmit() {
    this.logService.loginUser(this.loginForm.value).subscribe((res: any) => {
      if (res.Status == false) {
        Swal.fire({
          title: 'Error!',
          text: res.ErrorMessage,
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Ok',
          cancelButtonText: 'Cancel'
        }).then((result) => {
          if (result.value) {
            this.router.navigate(['/login']);
          }
        })
        return false;
      } else {
        Swal.fire({
          title: 'Success!',
          text: res.ErrorMessage,
          type: 'success',
          showCancelButton: true,
          confirmButtonText: 'Ok',
          cancelButtonText: 'Cancel'
        }).then((result) => {
          if (result.value) {
            this.router.navigate(['/dashboard']);
          }
        })
      }
      localStorage.setItem('Role', JSON.stringify(res.user.roleData));
      localStorage.setItem('AuthKey', res['auth-key']);
    }, error => {
      console.log(error);
    })

  }

  // Login() {
  //   this.router.navigate(['/dashboard']);
  // }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

  signOut(): void {
    this.authService.signOut();
  }
}
