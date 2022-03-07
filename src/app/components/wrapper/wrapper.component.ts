import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/model/address';
import { Company } from 'src/app/model/company';
import { Geo } from 'src/app/model/geo';
import { User } from 'src/app/model/user';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  userList: User[] = [];

  constructor() { 
    this.fetchUserFromApi();
  }

  ngOnInit(): void {
    
  }

  fetchUserFromApi() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => this.createUser(json));
  }

  createUser(data: any) {
    for (const element of data) {
      const newUSer: User = {
        id: element.id,
        name: element.name,
        username: element.username,
        email: element.email,
        phone: element.phone,
        website: element.website,
        address: this.createAddress(element.address),
        company: this.createCompany(element.company)
      };
      this.userList.push(newUSer);      
    }
    console.log('Array creato', this.userList);
  }

  createAddress(element: any): any {
    const newAddress: Address = {
      street: element.street,
      suite: element.suite,
      city: element.city,
      zipcode: element.zipcode,
      geo: this.createGeo(element.geo)
    };
    return newAddress;
  }

  createGeo(element: any): any {
    const newGeo: Geo = {
      lat: element.lat,
      lng: element.lng
    };
    return newGeo;
  }

  createCompany(element: any): any {
    const newCompany: Company = {
      name: element.name,
      catchPhrase: element.catchPhrase,
      bs: element.bs
    };
    return newCompany;
  }

}