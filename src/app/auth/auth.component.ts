import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../http.service';
import { AccountComponent } from '../account/account.component';
import { Router } from '@angular/router';

interface AuthResponse {
  token: string;
}

interface UserResponse {
  items: Array<{ id: string }>;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  username: string = '';
  password: string = '';


  constructor(private http: HttpClient, private dataService: DataService,private accountComponent:AccountComponent,private router: Router) {}

  onLogin() {
    const url = this.dataService.getApiBaseUrl()+`/auth/sign-in`;
    const credentials = btoa(`${this.username}:${this.password}`);

    const headers = new HttpHeaders({
      'Authorization': `Basic ${credentials}`
    });

    this.http.post<AuthResponse>(url, {}, { headers }).subscribe({
      next: (response) => {
        const accessToken = response.token;
        console.log("Access Token Retrieved",accessToken);
        this.dataService.setAccessToken(accessToken);

        // After successful login, fetch the account user list
        this.accountComponent.getAccountUserList().subscribe({
          next: (users) => {
            const userId = this.getUserId(users);

            if (userId) {
              // Fetch the utility token using the user ID
              this.accountComponent.getAccountUserToken(userId).subscribe({
                next: (tokenResponse) => {
                  const utilityToken = tokenResponse.token;
                  this.dataService.setUtilityToken(utilityToken);
                  console.log('Utility token retrieved:',utilityToken);
                  this.goToNextPage();
                },
                error: (error) => {
                  console.error('Failed to retrieve utility token:', error);
                }
              });
            } else {
              console.error('User ID not found');
            }
          },
          error: (error) => {
            console.error('Failed to retrieve account user list:', error);
          }
        });
      },
      error: (error) => {
        console.error('Login failed:', error);
      }
    });
  }

  // Find the user ID based on the token from the user list
  getUserId(users: UserResponse): string {
    return users.items?.[0]?.id || '';
  }
  goToNextPage() {
    this.router.navigate(['/main']);
  }
}
