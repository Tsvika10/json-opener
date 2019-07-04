import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  jsonApi = new Subject<any>();

  async onSend(v) {
    try {
      const jsonApi = await this.http.get(v).toPromise();
      this.jsonApi.next(jsonApi)
    } catch (err) {
      console.log(err)
    }
  }
}
