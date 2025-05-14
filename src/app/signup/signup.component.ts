import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user = {
    username: '',
    email: '',
    password: ''
  };

  onSubmit() {
    // Handle form submission
    console.log('User data:', this.user);
    // Add your authentication logic here
  }
}
