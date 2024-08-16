import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from '../http.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  constructor(private http: HttpClient, private dataService: DataService) { }

  // Method to retrieve the account user list
  getAccountUserList(): Observable<any> {
    const url = this.dataService.getApiBaseUrl()+`/account-user`;
    const headers = new HttpHeaders({
      'x-auth-token': this.dataService.getAccessToken()||''
    });

    return this.http.get<any>(url, { headers });
  }

  // Method to retrieve the token for a specific account user by ID
  getAccountUserToken(userId: string): Observable<any> {
    const url = this.dataService.getApiBaseUrl()+`/account-user/`+userId;
    const headers = new HttpHeaders({
      'x-auth-token': this.dataService.getAccessToken()||''
    });

    return this.http.post<any>(url, {}, { headers });
  }
}
