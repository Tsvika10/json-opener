import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from './api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { UtilitiesService } from './utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  done = new Subject<any>();
  data: any;
  loading = false;

  constructor(public apiService: ApiService, public utilService: UtilitiesService) { }

  apiForm = new FormGroup({
    apiInput: new FormControl('')
  });

  onSend() {
    this.loading = true;
    this.apiService.onSend(this.apiForm.value.apiInput);
  }

  ngOnInit(): void {
    this.apiService.jsonApi.pipe((takeUntil(this.done))).subscribe(v => {
      this.loading = false;
      this.data = v;
    });
  }

  ngOnDestroy() {
    this.done.next();
    this.done.unsubscribe();
  }



  // TODO: delete this method
  stringify(jsonValue) {
    return JSON.stringify(jsonValue);
  }

}

