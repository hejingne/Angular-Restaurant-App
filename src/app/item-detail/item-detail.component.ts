import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item: Item | undefined;

  constructor(private itemService: ItemService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.itemService.getItemById(id).subscribe(item => this.item = item);
  }

  goBack(): void {
    this.location.back(); // Navigate backward 1 step in the browser's history stack
  }

  saveEdit(): void {
    if (this.item) {
      this.itemService.updateItem(this.item).subscribe(() => this.goBack());  // Back to previous view after update
    }
  }

}
