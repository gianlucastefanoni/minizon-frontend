import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  pageTitle = 'minizon';
  logoPath = '../assets/image.png';
  cartPath = '../assets/cart.svg';
  userPath = '../assets/person.svg';
  logoWidth = 110;
  cartCount = 1;
  isGuest = true;
  isAdmin = false;

  constructor(private router: Router, private data: DataService ) {}
  ngOnInit(): void {
    this.isGuest = this.data.isGuest();
    this.isAdmin = this.data.isAdmin()
  }

  disconnect() {
    localStorage.setItem('logged', '');
    localStorage.setItem('admin', '');
    this.redirectToLogin();
  }
  redirectToLogin() {
    this.router.navigateByUrl('/login');
  }
}
