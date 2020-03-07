import { Company } from './company.model';
import { College } from './college.model';

export interface Review {
  reviewId: number;
  createdAt: string;
  likesCount: number;
  disLikesCount: number;
  spamCount: number;
  ignoreSpam: boolean;
  criteria: number;
  passingYear: number;
  title: string;
  placedStatus: string;
  company: Company;
  college: College;
}
