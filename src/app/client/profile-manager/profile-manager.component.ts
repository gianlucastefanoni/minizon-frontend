import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IClient } from '../../data/IClient';
import { IAddress } from '../../data/IAddress';
import { Router } from '@angular/router';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-profile-manager',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile-manager.component.html',
  styleUrl: './profile-manager.component.css',
})
export class ProfileManagerComponent implements OnInit {
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
  allAddresses: IAddress[] = [
    {
      id_address: null,
      id_client: null,
      street: null,
      city: null,
      zip_code: null,
      nation: null,
      main: true,
    },
    {
      id_address: null,
      id_client: null,
      street: null,
      city: null,
      zip_code: null,
      nation: null,
      main: null,
    },
  ];
  newAddress: IAddress = {
    id_address: null,
    id_client: null,
    street: null,
    city: null,
    zip_code: null,
    nation: null,
    main: null,
  };
  showNewAddress = false;

  confirmPassword = '';

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    if (this.dataService.isGuest()) this.router.navigateByUrl('/login');
    //Set User
    //Load addresses
  }

  onEnter(form: NgForm) {
    if (form.valid) {
      /**
 * this.dataService.register(this.user).subscribe({
  next: () => {
    this.router.navigateByUrl("/login");
  },
  error: (error) => {
    if (error.status) {
      console.log("Error Status Code:", error.status);
      this.error = true;
    }
  },
});*/
    }
  }

  toggleShowNewAddress() {
    this.showNewAddress = !this.showNewAddress;
  }

  deleteAddress(id_address: number | null) {
    //TODO delete address
    return;
  }

  setAsMainAddress(id_address: number | null) {
    //TODO set as main address
    return;
  }

  saveNewAddress(){
    //TODO save new address
    return;
  }
}
