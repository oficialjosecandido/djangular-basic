import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm!: FormGroup;
  user: any;
  register: any;
  registerForm!: FormGroup;
  

  constructor(
    private authService: AuthserviceService
  ) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });

    this.registerForm = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });
   }

  get f() {
    return this.myForm.controls;
  }

  onSubmit() {
    this.authService.login(this.f.username.value, this.f.password.value).pipe(first()).subscribe(
      data => {
        console.log('this is the data retrieved', data);
        this.user = data;
      }
    )
  }

  registerUser() {
    // console.log('qual é o meu body???', this.registerForm.value);    
    this.authService.registerNewUser(this.registerForm.value).subscribe(
      response => {
        console.log('this is the response', response);
        // alert('User' + this.register.username + 'has been created')
      },
      error => { 
        console.log('error creating user', error);
      }
    )
    
  }
}
