import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {

  loginForm = this.formBuilder.group({
    email: this.formBuilder.control(null, [Validators.required, Validators.email]),
    password: this.formBuilder.control(null, [Validators.required]),
  })


  constructor(public auth: AngularFireAuth, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    this.auth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password).then(
      () => {
        this.router.navigate(["form"]);
      }
    );
  
  }
  signup() {
    this.auth.createUserWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password);
  }

}