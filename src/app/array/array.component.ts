import { Component, OnInit, Input } from '@angular/core';
import { UtilitiesService } from '../utilities.service';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss']
})
export class ArrayComponent implements OnInit {

  @Input('objectArray') data:Object;

  constructor(public utilService:UtilitiesService) { }
  
  ngOnInit() {
  }

}
