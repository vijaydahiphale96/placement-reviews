import { UserData } from './user.model';

export interface AccessToken {
  accessToken: string;
  accessTokenId: string;
  createdAt: string;
  user: UserData;
}
