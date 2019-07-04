import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  isArray(v) {
    return v instanceof Array
  }
  isObject(v) {
    return (v instanceof Object && !(v instanceof Array))
  }

  isNumber(v) {
    return typeof v === "number"
  }

  isString(v) {
    return typeof v === "string"
  }

  entries(v) {
    return [...Object.entries(v)]
  }
}
