import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Item } from './item';
import { ITEMS } from './mock-items';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsURL = 'api/items';

  constructor(private messageService: MessageService,
              private http: HttpClient) { }

  getItems(): Observable<Item[]> {  // Get items from the remote server
    return this.http.get<Item[]>(this.itemsURL)
            .pipe(
                tap(_ => this.messageService.add(`ItemService: Fetched items`)),
                catchError(this.handleError<Item[]>('getItems', []))
            );
   }

  getItem(id: number): Observable<Item> {
    const itemURLById = `${this.itemsURL}/${id}`;
    return this.http.get<Item>(itemURLById)
            .pipe(
                tap(_ => this.messageService.add(`ItemService: Fetched item of Id ${id}`)),
                catchError(this.handleError<Item>(`getItem id=${id}`))
            );
 }

 /**
 * Error handling function that handles Http operation that failed and let the app continue.
 * It takes a type param so it can return the safe value as the type that the app expects.
 *
 * @param operation - name of the http operation that failed
 * @param result - optional value to return as the observable result
 */
 private handleError<T>(operation='operation', result?: T) {
   return (error: any): Observable<T> => {
     console.error(error);
     this.messageService.add(`ItemService: ${operation} failed: ${error.message}`);
     return of(result as T);
   }
 }
}
