import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Using Item as object
  newitem: Item = {name: ''};
  items: Item[] = [{name: 'First Item'}];

  show: boolean = true;

  //Pushing to list of item current item
  addItem(){
    this.items.push(new Item(this.newitem.name));
  }

  //Removing item according to index 
  removeItem(index:number){
    this.items.splice(index, 1);
  }
}
