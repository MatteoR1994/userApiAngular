import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/model/address';
import { Company } from 'src/app/model/company';
import { Geo } from 'src/app/model/geo';
import { User } from 'src/app/model/user';
import { DataServiceService } from 'src/app/services/data-service.service';
import { UserComponent } from '../user/user.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  userList: User[] = [];

  constructor(private dataService: DataServiceService, private http: HttpClient) { }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(users => this.userList = users);
  }

}
