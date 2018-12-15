import { Item } from './item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item [] = [
    {name: 'Video games'},
    {name: 'Beer'},
    {name: 'music'}
  ]

  constructor() { }

  getItems(): Item[]{
    return this.items;
  }
}
