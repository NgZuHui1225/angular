import { Component } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { DataService } from '../../http.service';

interface Item {
  id: string;
  description: string;
}

interface ItemResponse {
  items: Item[];
}


@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrl: './units.component.css'
})
export class UnitsComponent {
  accountUnits: any[] = [];
  keyword: string = '';
  type: string = '';
  block: string ='';
  page: string = '';
  pk: string ='50b9dae6-b548-428a-8b38-c98ad2099925';

  constructor(private http: HttpClient,private dataService: DataService) { }

  getAccountUnitList(){
    const url = this.dataService.getApiBaseUrl()+`/utility/`+this.pk+`/unit`;//this.dataService.getUtilityPK()
    const headers = new HttpHeaders({
      'x-auth-token': this.dataService.getAccessToken()||'',
      'x-utility-token': this.dataService.getUtilityToken()||''
    });
    let params = new HttpParams();
    params = params.set('keyword',this.keyword);
    params = params.set('type', this.type);
    params = params.set('block', this.block);
    params = params.set('page', this.page);
    this.http.get<ItemResponse>(url, { headers, params }).subscribe({
      next: (response) => {
        this.accountUnits = response.items;
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
  onItemClick(id: string): void {
    localStorage.setItem('id', id);
  }

}
