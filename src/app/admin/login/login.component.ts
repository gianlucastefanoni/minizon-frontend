import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../data/data.service';
import { IAdmin } from '../../data/IAdmin';

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
      localStorage.getItem('admin') !== '' &&
      localStorage.getItem('admin') !== null
    )
      this.router.navigateByUrl('/admin/catalog');
  }

  onEnter(form: NgForm) {
    const admin: IAdmin = {
      id_admin: 0,
      first_name: '',
      last_name: '',
      active: false,
      email: this.email,
      password: this.password,
      creation_date: '',
      last_access: '',
    };
    if (form.valid) {
      this.dataService.loginAdmin(admin).subscribe({
        next: () => {
          localStorage.setItem('admin', JSON.stringify(admin));
          this.error = false;
          this.router.navigateByUrl('/admin/catalog');
        },
        error: (error) => {
          console.log(error);
          this.errorMsg = error.error;
          this.error = true;
        },
      });
    }
  }
}
