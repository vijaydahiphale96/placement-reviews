import { Component, OnInit, Input } from '@angular/core';
import { Company } from 'src/app/shared/models/company.model';

@Component({
  selector: 'app-company-list-item',
  templateUrl: './company-list-item.component.html',
  styleUrls: ['./company-list-item.component.scss']
})
export class CompanyListItemComponent implements OnInit {

  @Input() companyData: Company;

  constructor() { }

  ngOnInit(): void {
  }

}
