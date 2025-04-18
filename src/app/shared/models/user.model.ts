export class UserLoginCredential {
  emailId: string = '';
  password: string = '';

  constructor(emailId: string, password: string) {
    this.emailId = emailId;
    this.password = password;
  }
}

export interface UserData {
  userId: number;
  firstName: string;
  lastName: string;
  emailId: string;
  password: string;
  createdAt: string;
  roleId: number;
  isEmailIdVerified: boolean;
  totalLikes: number;
  totalFavoriteComponies: number;
}
