import { Component, Input, OnInit } from '@angular/core';
import { Geo } from 'src/app/model/geo';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.scss']
})
export class GeoComponent implements OnInit {

  @Input() ge?: Geo

  constructor() { }

  ngOnInit(): void {
  }

}
