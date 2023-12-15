import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IClient } from '../../data/IClient';
import { Router } from '@angular/router';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  user: IClient = {
    id_client: 0,
    first_name: '',
    last_name: '',
    birth_date: '',
    active: false,
    email: '',
    password: '',
    telephone: '',
    creation_date: '',
    last_access: '',
  };

  confirmPassword = '';
  error = false;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    if (
      localStorage.getItem('logged') !== '' &&
      localStorage.getItem('logged') !== null
    )
      this.router.navigateByUrl('/catalog');
  }

  onEnter(form: NgForm) {
    if (form.valid) {
      this.dataService.register(this.user).subscribe({
        next: () => {
          this.router.navigateByUrl('/login');
        },
        error: (error) => {
          if (error.status) {
            console.log('Error Status Code:', error.status);
            this.error = true;
          }
        },
      });
    }
  }
}
