import { Component, OnInit } from '@angular/core';
import{ FormControl, FormGroup, Validators }from '@angular/forms';
import { from } from 'rxjs';
import {AuthService} from '../Services/auth.service';
import{TokenStorageService} from '../Services/token-storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private AuthService:AuthService,private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit() {
    this.AuthService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );

    // window.location.replace("../user-home/user-home.component.html");

  }

  reloadPage() {
    window.location.reload();
  }

  // myLoggedForm = new FormGroup({
  //   mail:new FormControl('',[Validators.required,Validators.pattern('^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$')]),
  //   password:new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z0-9]{3,}$')])

  // })


  //photo
  fd:FormData;
  done(t) {
    t.click();
  }
  // tslint:disable-next-line:typedef
  change(e, t2) {
    // tslint:disable-next-line:prefer-const
    let file = e.target.files[0];
    // tslint:disable-next-line:prefer-const
    let reader = new FileReader();
    // this.fd = new FormData();
    // this.fd.append('file', file, file.name);
    reader.readAsDataURL(file);
    reader.onload = readerEvent => {
      // tslint:disable-next-line:prefer-const
      let content = readerEvent.target.result;
      t2.src = content;
    };
  }
  //end of photo
}
