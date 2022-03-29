import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  gender: any[] = ['Male', 'Female'];
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private _userService: UserService, private router: Router, private _snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      user: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      gender: ['', Validators.required],
    })

  }

  ngOnInit(): void {
  }

  addUser(){
    const user: User = {
      user: this.form.value.user,
      name: this.form.value.name,
      surname: this.form.value.surname,
      gender: this.form.value.gender,
    }

    this._userService.addUser(user);
    this.router.navigate(['/dashboard/users']);

    this._snackBar.open('The user was created', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

}
