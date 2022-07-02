import { Component, OnInit } from '@angular/core';

import { Item } from '../item';
import { ItemService } from '../item.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  selectedItem?: Item;

  constructor(private itemService: ItemService,
              private messageService: MessageService) { }   // Inject each Service class as singleton

  ngOnInit(): void {
    this.getItems();
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
    this.messageService.add(`ItemsComponent: Selected item of Id ${item.id}`);
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  add(name: string): void {
    name = name.trim();
    if (name) {
      this.itemService.addItem({ name } as Item).subscribe(item => this.items.push(item));
    }
  }
}
