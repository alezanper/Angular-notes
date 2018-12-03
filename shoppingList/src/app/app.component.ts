import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newitem = '';
  items = [];

  addItem(){
    this.items.push(this.newitem);
  }

  removeItem(index:number){
    this.items.splice(index, 1);
  }
}
