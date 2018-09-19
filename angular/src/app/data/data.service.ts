import { Injectable } from '@angular/core';


@Injectable()
export class DataService {

  private _data: Array<any> = [];

  constructor() { 
    
  }

  set data(value: Array<any>) {
    this._data = value;
  }

  getGroupedData(groupItems: Array<any>, groupByCallback: Function, data?: Array<any>): {[key: string]: Array<any>} {
    let _groupedData = {};
    let filteredData = [];

    data = data || this._data;

    for (let i = 0, len = groupItems.length; i < len; i += 1) {
      filteredData = data.filter(groupByCallback(groupItems[i]));
      
      _groupedData[groupItems[i]] = filteredData;

    }
    return _groupedData;
  }

  filterBy(search: string, ...keys: Array<string>): Array<any> {
    return this._data.filter(
      v => (search === '')
      || keys.find(k => k.split('.').reduce((o,i)=>o[i], v).indexOf(search) >= 0)
    );
  }
}
