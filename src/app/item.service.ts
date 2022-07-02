import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Item } from './item';
import { ITEMS } from './mock-items';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private messageService: MessageService) { }

  getItems(): Observable<Item[]> {
    const items = of(ITEMS);
    this.messageService.add('ItemService: Fetched items successfully');
    return items;
   }

   getItem(id: number): Observable<Item> {
     const item = ITEMS.find(item => item.id === id)!;
     this.messageService.add(`ItemService: Fetched item of Id ${id}`);
     return of(item);
   }
}
