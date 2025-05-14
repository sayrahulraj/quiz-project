import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  onSubmit() {
    // Handle login logic here
    console.log('Login attempt with:', this.credentials);
    // Add your authentication service call here
  }
}
