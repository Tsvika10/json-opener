import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  jsonApi = new Subject<any>();

  onSend(apiInput: string) {
    this.http.get(apiInput).subscribe(data => {this.jsonApi.next(data); });
  }

  constructor(private http: HttpClient) { }


  getJsonData = () => this.jsonApi.asObservable();

}
