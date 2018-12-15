import { Item } from './item';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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

  //Returning an observable allow us to make an asynchronous request
  getItems(): Observable<Item[]>{
    return of(this.items);
  }
}
