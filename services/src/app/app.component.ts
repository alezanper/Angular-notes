import { ItemService } from './item.service';
import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  items : Item[];
  title = 'services';

  constructor(private itemService: ItemService){}

  ngOnInit(){
    this.getItems()
  }

  getItems(){
    this.items = this.itemService.getItems();
  }
}
