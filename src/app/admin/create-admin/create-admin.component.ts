import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../data/data.service';
import { IAdmin } from '../../data/IAdmin';

@Component({
  selector: 'app-create-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-admin.component.html',
  styleUrl: './create-admin.component.css',
})
export class CreateAdminComponent implements OnInit {
  admin: IAdmin = {
    id_admin: 0,
    first_name: '',
    last_name: '',
    active: false,
    email: '',
    password: '',
    creation_date: '',
    last_access: '',
  };

  confirmPassword = '';
  error = false;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    if (!this.dataService.isAdmin()) this.router.navigateByUrl('/admin/login');
  }

  onEnter(form: NgForm) {
    if (form.valid) {
      this.dataService.createAdmin(this.admin).subscribe({
        next: () => {
          this.router.navigateByUrl('/admin/catalog');
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
