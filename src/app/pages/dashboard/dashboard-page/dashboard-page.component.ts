import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/services/rest-api.service';
import { Company } from 'src/app/shared/models/company.model';
import { environment } from 'src/environments/environment';
import { BaseResponse } from 'src/app/shared/models/base-response.model';
import { Review } from 'src/app/shared/models/review.model';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  baseUrl = environment.baseUrl;

  popularCompanies: Company[];
  mostLikedReviews: Review[];

  constructor(
    private restApiService: RestApiService
  ) { }

  ngOnInit(): void {
    this.getPopularCompanies();
    this.getMostLikedReviews();
  }

  async getPopularCompanies() {
    this.popularCompanies = (await this.restApiService.get<BaseResponse<Company[]>>(
      this.baseUrl.concat('/get-all-companies'),
      true,
      true,
      true
    ).toPromise()).data;
  }

  getMostLikedReviews() {
    // TODO: get mostLikedReviews data
    this.mostLikedReviews = [];
  }

}
