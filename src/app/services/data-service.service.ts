import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../model/address';
import { Company } from '../model/company';
import { Geo } from '../model/geo';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  uList: User[] = [];

  constructor(private http: HttpClient) { }

  // 3 - CHIAMATA FATTA CON HTTP_CLIENT_MODULE
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  // 1 - UTILIZZANDO LA PROPRIETA' DELLE INTEFRACCE, versione generica
  // fetchtUsers(): Promise<Response> {
  //   return fetch('https://jsonplaceholder.typicode.com/users');
  // }

  // 1 - UTILIZZANDO LA PROPRIETA' DELLE INTEFRACCE, versione specifica
  // fetchtUsers(): Promise<User[]> {
  //   return fetch('https://jsonplaceholder.typicode.com/users')
  //       .then((response) => response.json())
  //       .then((data) => {
  //         this.uList = data;
  //         return this.uList;
  //       });
  // }

  // 2 - UTILIZZANDO LE INTEFRACCE COME OGGETTI CLASSE, utilizzando dei metodi propri del servizio
  // fetchtUsers(): Promise<User[]> {
  //   return fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       return this.createUser(data);
  //     });
  // }

  createUser(data: any): User[] {
    const userList: User[] = [];
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
      userList.push(newUSer);      
    }
    //this.uList = userList;
    return userList;
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
