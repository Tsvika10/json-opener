import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UtilitiesService } from '../utilities.service';

@Component({
  selector: 'app-json-unit',
  templateUrl: './json-unit.component.html',
  styleUrls: ['./json-unit.component.scss']
})
export class JsonUnitComponent implements OnInit {

  constructor(public utl: UtilitiesService) { }

  @Input() data: any;
  @Input() name: string = "";
  opened: boolean = false;
  dataEntries: Array<any>;

  ngOnInit() {
    if (this.utl.isObject(this.data)) {
      this.dataEntries = this.utl.entries(this.data);
    }
  }
  onToggle() {
    this.opened = !this.opened;
  }

}
