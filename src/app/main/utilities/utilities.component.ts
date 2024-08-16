import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { DataService } from '../../http.service';


interface Item {
  pk: string;
  display_name: string;
}

interface ItemResponse {
  items: Item[];
}

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.component.html',
  styleUrl: './utilities.component.css'
})
export class UtilitiesComponent implements OnInit{
  page: string = '1';
  items: Array<{ pk: string, display_name: string }> = [];

  constructor(private http: HttpClient,private dataService: DataService) { }

  ngOnInit(): void {
    this.getUtilitiesList();
  }

  getUtilitiesList(){
    
    const url = this.dataService.getApiBaseUrl()+`/utility/`;
    const headers = new HttpHeaders({
      'x-auth-token': this.dataService.getAccessToken()||'',
      'x-utility-token': this.dataService.getUtilityToken()||'',
    });
    let params = new HttpParams();
    params = params.set('type', this.dataService.getUtilityType()||'');
    params = params.set('page', this.page);
    this.http.get<ItemResponse>(url, { headers, params }).subscribe({
      next: (response) => {
        this.items =response.items;
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
  
  onItemClick(pk: string): void {
    this.dataService.setUtilityPK(pk);
  }
}
