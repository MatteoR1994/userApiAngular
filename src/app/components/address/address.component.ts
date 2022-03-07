import { Component, Input, OnInit } from '@angular/core';
import { Address } from 'src/app/model/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input() addr?: Address;

  constructor() { }

  ngOnInit(): void {
  }

}
