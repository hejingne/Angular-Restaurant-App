import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const items = [
      {id: 1, name: 'Pad Thai'},
      {id: 2, name: 'Green Curry'},
      {id: 3, name: 'Thai Iced Tea'},
      {id: 4, name: 'Khao Soi'},
      {id: 5, name: 'Tom Yum Goong'},
      {id: 6, name: 'Spicy Chicken Fried Rice'},
      {id: 7, name: 'Mango Coconut Sticky Rice'},
      {id: 8, name: 'Guay Teow (Noodle Soup)'},
      {id: 9, name: 'Panang Curry'},
      {id: 10, name: 'Masamman Curry'}
    ];
    return {items};
  }

  genId(items: Item[]): number {  // Override the inherited genId() method
    return items.length > 0
      ? Math.max(...items.map(item => item.id)) + 1
      : 1;
  }
}
