import { Component, Input, OnInit } from '@angular/core';
import { Company } from 'src/app/model/company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  @Input() comp?: Company;

  constructor() { }

  ngOnInit(): void {
  }

}
