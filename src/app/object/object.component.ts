import { Component, OnInit, Input } from '@angular/core';
import { UtilitiesService } from '../utilities.service';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {
  
  @Input('objectData') data:Object;

  constructor(public utilService:UtilitiesService) { }

  ngOnInit() {
  }

}
