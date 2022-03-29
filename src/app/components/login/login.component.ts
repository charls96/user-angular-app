import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  ingresar() {
    console.log(this.form);
    const user = this.form.value.user;
    const password = this.form.value.password;

    if(user === 'carlos' && password === 'admin123'){

    } else {
      this.error();
      this.form.reset();
    }
  }

  error() {
    this._snackBar.open('Invalid user or password', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(() =>{
      //Redirect to dashboard
      this.loading = false;
    }, 1500);
  }

}
