import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IClient } from '../../data/IClient';
import { Router } from '@angular/router';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  error = false;
  errorMsg = 'Error in login';

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    if (
      localStorage.getItem('logged') !== '' &&
      localStorage.getItem('logged') !== null
    )
      this.router.navigateByUrl('/catalog');
  }

  onEnter(form: NgForm) {
    const user: IClient = {
      id_client: 0,
      first_name: '',
      last_name: '',
      birth_date: '',
      active: false,
      email: this.email,
      password: this.password,
      telephone: '',
      creation_date: '',
      last_access: '',
    };
    if (form.valid) {
      this.dataService.login(user).subscribe({
        next: () => {
          localStorage.setItem('logged', JSON.stringify(user));
          this.error = false;
          this.router.navigateByUrl('/home');
        },
        error: (error) => {
          console.log(error);
          this.errorMsg = error.error;
          this.error = true;
        },
      });
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
