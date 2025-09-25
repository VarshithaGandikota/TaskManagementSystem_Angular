import { Component } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../models/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule,RouterLinkActive,RouterModule],
  templateUrl: './user-signup.component.html',
  styleUrl: './user-signup.component.css'
})
export class UserSignupComponent {

  user: User = {
    username: '',
    email: '',
    password: '',
    user_id: 0,
    project: [],
    task: []
  };

  successMessage!: string;
  errorMessage!: string;

  constructor(private userService: UserService) { }

  signup(): void {
    this.userService.signup(this.user).subscribe(
      response => {
        this.successMessage = 'User registered successfully';
        this.errorMessage = '';
        alert("user saved successfully")
      },
      error => {
        this.errorMessage = error.error;
        this.successMessage = '';
      }
    );
  }
}
