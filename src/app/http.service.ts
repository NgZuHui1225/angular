import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiBaseUrl = 'https://api.staging.icares.app/utility';
  private accessToken: string | null = null;
  private utilityToken: string | null = null;
  private utilityType: string | null = null;
  private utilityPK: string | null = null;

//--------------------------------Base-Url----------------------------------//

  getApiBaseUrl(): string {
    return this.apiBaseUrl;
  }

//--------------------------------Access-Token----------------------------------//

  setAccessToken(token: string): void {
    this.accessToken = token;
    localStorage.setItem('accessToken', token);
  }

  getAccessToken(): string | null {
    if (!this.accessToken) {
      this.accessToken = localStorage.getItem('accessToken');
    }
    return this.accessToken;
  }

//--------------------------------Utility-Token----------------------------------//

  setUtilityToken(token: string): void {
    this.utilityToken = token;
    localStorage.setItem('utilityToken', token);
  }

  getUtilityToken(): string | null {
    if (!this.utilityToken) {
      this.utilityToken = localStorage.getItem('utilityToken');
    }
    return this.utilityToken;
  }

//--------------------------------Utility-Type----------------------------------//

    setUtilityType(type: string): void {
      this.utilityType = type;
      localStorage.setItem('utilityType', type);
    }
  
    getUtilityType(): string | null {
      if (!this.utilityType) {
        this.utilityType = localStorage.getItem('utilityType');
      }
      return this.utilityType;
    }
//--------------------------------Utility-PK----------------------------------//

setUtilityPK(pk: string): void {
  this.utilityPK = pk;
  localStorage.setItem('utilityPK', pk);
}

getUtilityPK(): string | null {
  if (!this.utilityPK) {
    this.utilityPK = localStorage.getItem('utilityPK');
  }
  return this.utilityPK;
}
}
